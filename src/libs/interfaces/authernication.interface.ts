export interface IAuthentication {
  login?: boolean;
  signOut?: boolean;
  register?: boolean;
  resetPassword?: boolean;
  updatePassword?: boolean;
}

export interface IAuthor {
  author_id?: number;
  fullname: string;
  email: string;
  password?: string;
  image: string;
  salt?: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  image_id: string;
}

export interface ISigninAuthor {
  email: string;
  password: string;
}
