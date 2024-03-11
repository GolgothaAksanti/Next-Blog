import { UploadResponse } from "imagekit/dist/libs/interfaces";
import imageKitConfig from "./config";

class ImagekitService {
  private config;

  constructor() {
    this.config = imageKitConfig;
  }

  async uploadFile(
    base64string: string,
    folder: string,
    fileName: string
  ): Promise<any | null> {
    return new Promise((resolve, reject) => {
      try {
        const result: Promise<UploadResponse> = this.config.imagekit.upload({
          file: base64string,
          fileName,
          folder,
        });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  async deleteFile(fileId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        const result: Promise<void> = this.config.imagekit.deleteFile(fileId);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default ImagekitService;
