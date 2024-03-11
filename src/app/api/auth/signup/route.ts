import { NextRequest, NextResponse } from "next/server";

import { db } from "@/libs/utils/db.config";
import Token from "@/libs/utils/token";
import Password from "@/libs/utils/password.util";
import { HTTP_CODES, HTTP_MESSAGES } from "@/libs/utils/http.handler";
import {
  responseHandler,
  tryCatchErrorHandler,
} from "@/libs/utils/response.handler";
import { IAuthor } from "@/libs/interfaces/authernication.interface";
import { signupAuthorValidator } from "@/libs/validators/auth.validator";
import { bigIntHandler } from "@/libs/utils/bigint.handler";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body: IAuthor = await req.json();

    const validate = signupAuthorValidator.parse(body);

    const isAlreadyExist = await db.authors.findFirst({
      where: { email: body.email },
    });

    if (isAlreadyExist) {
      return responseHandler(
        HTTP_CODES.BAD_REQUEST_CODE,
        HTTP_MESSAGES.ALREADY_EXIST
      );
    }

    const salt = Password.salt();
    const password = Password.hash(validate.password, salt);

    const author = await db.authors.create({
      data: {
        email: body.email,
        password,
        salt,
        fullname: body.fullname,
        image: body.image,
        image_id: body.image_id,
      },
    });

    if (!author) {
      return responseHandler(
        HTTP_CODES.BAD_REQUEST_CODE,
        HTTP_MESSAGES.BAD_REQUEST_MSG
      );
    }

    const data: IAuthor = {
      email: author.email,
      fullname: author.fullname,
      author_id: bigIntHandler(author.author_id),
      image: author.image as string,
      image_id: author.image_id as string,
      createdAt: author.createdAt as Date,
      updatedAt: author.updatedAt,
      status: author.status,
    };
    const token: string | null = Token.generate(data);

    return responseHandler(HTTP_CODES.CREATED_CODE, HTTP_MESSAGES.CREATED_MSG, {
      data,
      token,
    });
  } catch (error) {
    return tryCatchErrorHandler(error);
  }
};
