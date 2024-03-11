import { NextResponse } from "next/server";
import { z } from "zod";

import { HTTP_CODES, HTTP_MESSAGES } from "./http.handler";

export const responseHandler = (
  HTTP_CODE: number,
  HTTP_MESSAGE?: string,
  data?: any
): NextResponse => {
  return NextResponse.json(
    { status: HTTP_CODE, message: HTTP_MESSAGE, data },
    { status: HTTP_CODE}
  );
};

export const tryCatchErrorHandler = (err: any) => {
  let error:string | IZodError[] = [];
  let code = 500;

  if (err instanceof z.ZodError) {
    error = err.issues.map((issue) => ({
      message: `${issue.path.join(".")} ${issue.message}`,
    }));

    code = HTTP_CODES.BAD_REQUEST_CODE;
  } else {
    error = HTTP_MESSAGES.INTERNAL_SERVER_ERROR_MSG;
  }

  if (code !== 500) {
    return responseHandler(HTTP_CODES.BAD_REQUEST_CODE,  Array.isArray(error) ? error.map(obj => obj.message).join(', ') : "");
  }

  // console.log(err);
  return responseHandler(
    HTTP_CODES.INTERNAL_SERVER_ERROR_CODE,
    HTTP_MESSAGES.INTERNAL_SERVER_ERROR_MSG
  );
};


interface IZodError{
  message: string
}