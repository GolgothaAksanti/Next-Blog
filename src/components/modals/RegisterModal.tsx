"use client";

import Link from "next/link";
import { useRecoilState, useSetRecoilState } from "recoil";
import React, { useEffect, useState } from "react";

import { FiLoader } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import {
  AuthenticationModalState,
  AuthenticationState,
} from "@/libs/store/authenticationStore";
import { IAuthentication } from "@/libs/interfaces/authernication.interface";
import { IAuthenticationDefault } from "@/libs/constants/authentication.constants";
import Button from "../widgets/Button";
import InputField from "../widgets/InputField";
import { FileInput } from "../widgets/FileInput";
import { ISetFile } from "@/libs/interfaces/upload.image.interface";
import Input from "../widgets/Input";


const RegisterModal = (): JSX.Element => {
  const [showModal, setShowModal] = useRecoilState<IAuthentication>(
    AuthenticationModalState
  );
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<ISetFile | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | null>(null);
  const setAuthenticationState = useSetRecoilState(AuthenticationState);

  const MAX_IMAGES = 1;
  const MAX_IMAGE_SIZE_MB = 2;
  const ALLOWED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];

  const onClose = (): void => {
    setShowModal(IAuthenticationDefault);
    document.body.classList.remove("overflow-hidden");
    document.body.classList.remove("h-screen");
    document.body.classList.remove("max-h-screen");
    document.body.setAttribute("style", "");
    setSrc(null)
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

  //       if (!isRecaptchaVerified) {
  //         setErrors("Recaptcha invalide");
  //         setLoading(false);
  //         return;
  //       } else if (!fullname || fullname === "" || fullname.length < 9) {
  //         setErrors("Nom complet invalide");
  //         return;
  //       } else if (
  //         !email ||
  //         email === "" ||
  //         !email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
  //       ) {
  //         setErrors("Adresse e-mail invalide");
  //         return;
  //       } else if (!phonenumber) {
  //         setErrors("Numéro de téléphone invalide");
  //         return;
  //       } else if (password.length < 8) {
  //         setErrors("La taille minimale du mot de passe est de 8 caractères");
  //         return;
  //       } else if (!password || password === "") {
  //         setErrors("Mot de passe invalide");
  //         return;
  //       } else if (!confirmPassword || confirmPassword === "") {
  //         setErrors("Confirmation du mot de passe invalide");
  //         return;
  //       } else if (password !== confirmPassword) {
  //         setErrors("Vos mots de passe ne correspondent pas");
  //         return;
  //       } else {
  //         setLoading(true);

  //         const response = await Service.post(ROUTES.SIGNUP, {
  //           fullname,
  //           password,
  //           email,
  //           phonenumber: String(phonenumber).slice(1),
  //         });

  //         setLoading(false);

  //         if (response?.status === 201) {
  //           setEmail("");
  //           setPhoneNumber(null);
  //           setPassword("");
  //           setFullname("");
  //           setConfirmPassword("");
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

  if (!showModal.register) return <></>;

  return (
    <div className="inset-0 flex items-center justify-center px-5 py-10 lg:py-16 w-full h-full max-h-full absolute z-[999999] bg-black/70">
      <form
        onSubmit={() => {}}
        className="relative flex flex-col space-y-5 max-h-full min-h-[400px] w-full md:w-[400px] lg:w-[500px] rounded-xl text-xs bg-white py-8 px-5 lg:px-16 shadow-2xl overflow-y-auto"
      >
        <div className="flex flex-row space-x-2 items-end justify-end pb-2">
          <Button
            onClick={onClose}
            className="text-xl text-black hover:text-black/50 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
          >
            <AiOutlineClose />
          </Button>
        </div>
        <div className="space-y-2 h-full">
          <div className="pb-8">
            <p className="text-2xl text-center font-bold">
              Next Blog
              <br />
              <span className="text-base font-normal">Inscription</span>
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <FileInput
                setFile={setImage}
                setSrc={setSrc}
                src={src}
                loading={imageLoading}
                setLoading={setImageLoading}
                max_file_size_mb={MAX_IMAGE_SIZE_MB}
                max_files={MAX_IMAGES}
                allowed_file_ext={ALLOWED_IMAGE_EXTENSIONS}
              />
            </div>
            <div className="border-b">
              <Input
                onChange={(e) => setFullname(e.target.value)}
                placeholder="FULL NAME"
                value={fullname}
                className="border-none py-2 bg-white px-0"
              />
            </div>
            <div className="border-b">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="border-none py-2 bg-white px-0"
              />
            </div>
            <div className="border-b">
              <Input
                inputType="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
                className="border-none py-2 bg-white px-0"
              />
            </div>
            <div className="border-b">
              <Input
                inputType="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="CONFIRM PASSWORD"
                className="border-none py-2 bg-white px-0"
              />
            </div>
            <div className="w-full pt-5 pb-8 space-y-4">
              <div
                className={`flex flex-col space-y-2 ${!errors ? "pb-4" : ""}`}
              >
                {errors ? (
                  <div className="w-full rounded-md px-4 py-2 flex justify-center items-center bg-red-700/50 text-white capitalize">
                    {errors}
                  </div>
                ) : null}
              </div>
              <Button
                type="submit"
                className="flex justify-center items-center bg-black hover:bg-black/80 w-full px-4 py-3 rounded-md text-white uppercase text-sm"
              >
                {loading ? (
                  <div className="px-8 py-[3px]">
                    <FiLoader className="animate-spin" />
                  </div>
                ) : (
                  "Register"
                )}
              </Button>

              <div className="w-full text-center text-sm font-light">
                Already have an account?{" "}
                <Button
                  onClick={() => setShowModal({ login: true })}
                  className="underline hover:text-gray-600"
                >
                  Sign in.
                </Button>
              </div>
            </div>

            <div className="text-center text-sm">
              By registering in our services, you accepted our <br />
              <Link
                href="/terms"
                onClick={onClose}
                className="underline hover:text-secondary font-bold capitalize"
              >
                terms and conditions
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterModal;
