import { IAuthor, ISigninAuthor } from "../interfaces/authernication.interface";
import { Service } from "./service";

export const signup = async(data: IAuthor) => await Service.post("/auth/signup", data)
export const signin = async(data: ISigninAuthor) => await Service.post("/auth/signin", data)