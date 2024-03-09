export interface IUploadImage {
  image: string;
  type: ImageType;
}

export enum ImageType {
  profile = "profile",
  blog = "blog",
}

export interface ISetFile {
  image_url: string;
  image_id: string;
}
