"use client";

import Link from "next/link";
import { useRecoilState, useSetRecoilState } from "recoil";
import React, { useEffect, useState } from "react";

import { FiLoader } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../widgets/Button";
// import { Service } from "@/libs/service";
// import { ROUTES } from "@/libs/endpoints";
import InputField from "../widgets/InputField";
import {
  AuthenticationModalState,
  AuthenticationState,
} from "@/libs/store/authenticationStore";
import { IAuthenticationDefault } from "@/libs/constants/authentication.constants";
import { IAuthentication } from "@/libs/interfaces/authernication.interface";

const LoginModal = (): JSX.Element => {
  const [showModal, setShowModal] = useRecoilState<IAuthentication>(
    AuthenticationModalState
  );
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string | null>(null);

  const setAuthenticationState = useSetRecoilState(AuthenticationState);

  const onClose = (): void => {
    setShowModal(IAuthenticationDefault);
    document.body.classList.remove("overflow-hidden");
    document.body.classList.remove("h-screen");
    document.body.classList.remove("max-h-screen");
    document.body.setAttribute("style", "");
  };

  useEffect(() => {
    let timeOut: string | number | NodeJS.Timeout | undefined;
    timeOut = setTimeout(() => {
      if (errors) setErrors(null);
      if (loading) setLoading(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [loading, errors]);

  //   const onSumbit = async (
  //     e: React.FormEvent<HTMLFormElement>
  //   ): Promise<void> => {
  //     try {
  //       e.preventDefault();

  //       if (
  //         !email ||
  //         email === "" ||
  //         !email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
  //       ) {
  //         setErrors("Adresse e-mail invalide");
  //         return;
  //       } else if (!password || password === "") {
  //         setErrors("Mot de passe invalide");
  //         return;
  //       } else {
  //         setLoading(true);

  //         const response = await Service.post(ROUTES.SIGNIN, {
  //           email,
  //           password,
  //         });

  //         setLoading(false);

  //         if (response?.status === 200) {
  //           setEmail("");
  //           setPassword("");
  //           setAuthenticationState(true);
  //           localStorage.setItem("token", response?.data?.token);
  //           onClose();
  //         } else {
  //           setErrors(response?.message);
  //         }
  //       }
  //     } catch (error) {
  //       setErrors("Une erreur est survenue, veuillez réessayer plus tard");
  //       setLoading(false);
  //     }
  //   };

  if (!showModal.login) return <></>;

  return (
    <div className="inset-0 flex items-center justify-center px-5 py-10 lg:py-16 w-full h-full max-h-full absolute z-[999999] bg-black/70">
      <form
        onSubmit={() => {}}
        className="relative flex flex-col space-y-5 max-h-full min-h-[400px] w-full md:w-[500px] rounded-xl text-xs bg-white py-8 px-5 lg:px-16 shadow-2xl"
      >
        <div className="flex flex-row space-x-2 items-end justify-end pb-2">
          <Button
            onClick={onClose}
            className="text-xl text-black hover:text-black/50 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
          >
            <AiOutlineClose />
          </Button>
        </div>
        <div className="space-y-2 h-full overflow-y-auto search-scrollbar">
          <div className="pb-8">
            <p className="text-2xl text-center font-bold flex flex-col gap-y-2">
              <span className="">Welcome Back,</span>
              <span className="text-xs font-light">
                Please, enter your details to sign in
              </span>
            </p>
          </div>
          <div className="space-y-5">
            <div className="border-b">
              <InputField
                autoFocus={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="border-none autofill:bg-white bg-transparent px-0 py-1"
              />
            </div>
            <div className="border-b">
              <InputField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
                className="border-none autofill:bg-white bg-transparent px-0 py-1"
              />
            </div>

            <div className="w-full flex justify-end text-center text-sm">
              <Button
                onClick={() => setShowModal({ resetPassword: true })}
                className="underline hover:text-gray-600 font-light"
              >
                Forget your password?
              </Button>
            </div>
            <div className="w-full pt-5 pb-8 space-y-4">
              {errors ? (
                <div className="w-full rounded-md px-4 py-2 flex justify-center items-center bg-red-700/50 text-white capitalize">
                  {errors}
                </div>
              ) : null}

              <Button
                type="submit"
                className="flex justify-center items-center bg-black hover:bg-black/80 w-full px-4 py-3 rounded-full text-white uppercase text-sm"
              >
                {loading ? (
                  <div className="px-8 py-[3px]">
                    <FiLoader className="animate-spin" />
                  </div>
                ) : (
                  "Sign in"
                )}
              </Button>

              <div className="w-full text-center text-sm font-light">
                Don{"’"}t have an account?{" "}
                <Button
                  onClick={() => setShowModal({ register: true })}
                  className="underline hover:text-gray-600"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
