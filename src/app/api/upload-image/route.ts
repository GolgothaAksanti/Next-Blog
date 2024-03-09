import {
  IUploadImage,
  ImageType,
} from "@/libs/interfaces/upload.image.interface";
import ImageKit from "@/libs/plugin/imagekit";
import { generateFileName } from "@/libs/utils/files";
import { HTTP_CODES, HTTP_MESSAGES } from "@/libs/utils/http.handler";
import {
  responseHandler,
  tryCatchErrorHandler,
} from "@/libs/utils/response.handler";
import { uploadImageValidator } from "@/libs/validators/upload.file.validator";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body: IUploadImage = await req.json();

    const validate = uploadImageValidator.parse(body);

    const image = await ImageKit.uploadFile(
      body.image,
      body.type === ImageType.blog ? "/blogs" : "/blog-profile",
      `image_${generateFileName()}`
    );

    return responseHandler(HTTP_CODES.CREATED_CODE, HTTP_MESSAGES.CREATED_MSG, {
      image_url: image.url,
      image_id: image.fileId,
    });
  } catch (error) {
    console.log(error);
    return tryCatchErrorHandler(error);
  }
};
