import { RecoilState, atom } from "recoil";
import { IAuthenticationDefault } from "../constants/authentication.constants";
import { IAuthentication, IAuthor } from "../interfaces/authernication.interface";

export const AuthenticationModalState: RecoilState<IAuthentication> =
  atom<IAuthentication>({
    key: "authenticationModalState",
    default: IAuthenticationDefault,
  });

export const AuthenticationState: RecoilState<boolean> = atom<boolean>({
  key: "authenticationState",
  default: false,
});

export const ResetPasswordTokenState: RecoilState<string | null> = atom<
  string | null
>({
  key: "resetPasswordTokenState",
  default: null,
});

export const UserStore: RecoilState<IAuthor | null> = atom<IAuthor | null>({
  key: "user-store",
  default: null
})
