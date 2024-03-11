import ImageKit from "imagekit";
import "dotenv/config";

const {
  IMAGEKIT_PUBLIC_API_KEY,
  IMAGEKIT_PRIVATE_API_KEY,
  IMAGEKIT_URL_ENDPOINT,
} = process.env;

const imagekit: ImageKit = new ImageKit({
  publicKey: IMAGEKIT_PUBLIC_API_KEY as string,
  privateKey: IMAGEKIT_PRIVATE_API_KEY as string,
  urlEndpoint: IMAGEKIT_URL_ENDPOINT as string,
});

const imageKitConfig = { imagekit };

export default imageKitConfig;
