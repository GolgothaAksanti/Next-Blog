import { z } from "zod";

export const uploadImageValidator = z
  .object({
    image: z.string(),
    type: z.string(),
  })
  .strict();
