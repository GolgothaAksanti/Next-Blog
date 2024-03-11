"use client";

import { useRecoilState, useSetRecoilState } from "recoil";
import React, { useEffect, useState } from "react";

import { FiLoader } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../widgets/Button";
import { IAuthenticationDefault } from "@/libs/constants/authentication.constants";
import {
  AuthenticationModalState,
  ResetPasswordTokenState,
} from "@/libs/store/authenticationStore";
import InputField from "../widgets/InputField";

const ResetPasswordModal = (): JSX.Element => {
  const [showModal, setShowModal] = useRecoilState(AuthenticationModalState);
  const setResetToken = useSetRecoilState(ResetPasswordTokenState);

  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
  }, [loading, errors, showModal]);

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
  //       } else {
  //         setLoading(true);

  //         const response = await Service.post(ROUTES.RESET_PASSWORD, {
  //           email,
  //         });

  //         setLoading(false);

  //         if (response?.status === 200) {
  //           setEmail("");
  //           setResetToken(response?.data?.token);
  //           setShowModal({ updatePassword: true, resetPassword: false });
  //         } else {
  //           setErrors(response?.message);
  //         }
  //       }
  //     } catch (error) {
  //       setErrors("Une erreur est survenue, veuillez réessayer plus tard");
  //       setLoading(false);
  //     }
  //   };

  if (!showModal.resetPassword) return <></>;

  return (
    <div className="inset-0 flex items-center justify-center px-5 py-10 lg:py-16 w-full h-full max-h-full absolute z-[999999] bg-black/70">
      <form
        onSubmit={() => {}}
        className="relative flex flex-col space-y-5 max-h-full min-h-[300px] w-full md:w-[400px] rounded-md text-xs bg-white py-8 px-5 lg:px-10 shadow-2xl"
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
            <p className="text-2xl text-center font-bold">
              Next Blog
              <br />
              <span className="text-base font-normal">Reset Your password</span>
            </p>
          </div>
          <div className="space-y-5">
            <div className="border-b">
              <InputField
                autoFocus={true}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="border-none bg-transparent px-0"
              />
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
                  "Reset Password"
                )}
              </Button>

              <div className="flex flex-col space-y-2 pb-4">
                <div className="w-full text-center text-sm">
                  Already have an account?{" "}
                  <Button
                    onClick={() => setShowModal({ login: true })}
                    className="underline hover:text-secondary"
                  >
                    Log in
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center text-sm">
              An email containing the password reset code will be sent to your
              email address if it is found in our system.
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordModal;
