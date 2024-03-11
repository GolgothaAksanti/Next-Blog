import { NextRequest, NextResponse } from "next/server";

import { db } from "@/libs/utils/db.config";
import Token from "@/libs/utils/token";
import Password from "@/libs/utils/password.util";
import { HTTP_CODES, HTTP_MESSAGES } from "@/libs/utils/http.handler";
import {
  responseHandler,
  tryCatchErrorHandler,
} from "@/libs/utils/response.handler";
import {
  IAuthor,
  ISigninAuthor,
} from "@/libs/interfaces/authernication.interface";
import { signinAuthorValidator } from "@/libs/validators/auth.validator";
import { bigIntHandler } from "@/libs/utils/bigint.handler";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body: ISigninAuthor = await req.json();

    const validate = signinAuthorValidator.parse(body);

    const author = await db.authors.findFirst({
      where: { email: body.email },
    });

    if (!author) {
      return responseHandler(
        HTTP_CODES.BAD_REQUEST_CODE,
        HTTP_MESSAGES.BAD_REQUEST_MSG
      );
    }

    const isPassword = Password.compare(
      body.password,
      author?.password as string,
      author?.salt as string
    );

    if (!isPassword) {
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

    return responseHandler(HTTP_CODES.SUCCESS_CODE, HTTP_MESSAGES.SUCCESS_MSG, {
      data,
      token,
    });
  } catch (error) {
    return tryCatchErrorHandler(error);
  }
};
