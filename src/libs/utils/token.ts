import { NextRequest, NextResponse } from "next/server";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { responseHandler } from "./response.handler";
import { HTTP_CODES, HTTP_MESSAGES } from "./http.handler";
import { IToken } from "../interfaces/token.interface";

dotenv.config();

const { JWT_SECRET_KEY } = process.env;

class TokenUtils implements IToken {
  protected secret_key = JWT_SECRET_KEY;

  generate(
    payload: any = {},
    expiresIn: any = { expiresIn: "1d" }
  ): string | null {
    let isValidPayload = true;
    if (typeof payload === "number") {
      isValidPayload = false;
    } else if (payload === null) {
      isValidPayload = false;
    } else if (typeof payload === "object" && !Object.keys(payload).length) {
      isValidPayload = false;
    }

    return isValidPayload
      ? jwt.sign({ payload }, this.secret_key as string, expiresIn)
      : null;
  }

  decode(token: string): any {
    try {
      return jwt.verify(token, this.secret_key as string);
    } catch (error: any) {
      return { errors: error };
    }
  }

  extract(req: NextRequest): string | NextResponse {
    const authorization = req.headers.get("authorization");

    if (!authorization) {
      return responseHandler(
        HTTP_CODES.UNAUTHORIZED_CODE,
        HTTP_MESSAGES.UNAUTHORIZED_MSG
      );
    }
    const token: string = authorization.slice(7);
    return token;
  }
}

const Token = new TokenUtils()

export default Token;
