export interface ICategories {
  id: number;
  name: string;
}

export interface IBlog {
  _id: string;
  author: string;
  blog: string;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
