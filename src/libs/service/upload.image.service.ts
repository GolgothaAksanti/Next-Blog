import { Service } from "./service";
import { IUploadImage } from "../interfaces/upload.image.interface";

export const uploadImage = async (data: IUploadImage) =>
  await Service.post("/upload-image", data);
