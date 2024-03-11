import { z } from "zod";

export const signupAuthorValidator = z
  .object({
    fullname: z.string(),
    email: z.string().email("Email is not valid"),
    password: z
      .string()
      .min(8, "password is supposed to be at least 8 character"),
    image: z.string(),
    status: z.string().optional(),
    image_id: z.string(),
  })
  .strict();

export const signinAuthorValidator = z
  .object({
    email: z.string().email("Email is not valid"),
    password: z
      .string()
      .min(8, "password is supposed to be at least 8 character"),
  })
  .strict();
