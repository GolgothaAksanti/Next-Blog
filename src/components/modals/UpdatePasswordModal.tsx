"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { FiLoader } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../widgets/Button";
import { AuthenticationModalState, ResetPasswordTokenState } from "@/libs/store/authenticationStore";
import { IAuthenticationDefault } from "@/libs/constants/authentication.constants";
import InputField from "../widgets/InputField";


const UpdatePasswordModal = (): JSX.Element => {
  const [showModal, setShowModal] = useRecoilState(AuthenticationModalState);

  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const token = useRecoilValue(ResetPasswordTokenState);

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | null>(null);

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

//       if (!code || code === "" || code.length !== 6) {
//         setErrors("ce code invalide");
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

//         const response = await Service.post(ROUTES.UPDATE_PASSWORD, {
//           code,
//           token,
//           password,
//         });

//         setLoading(false);

//         if (response?.status === 200) {
//           setCode("");
//           setPassword("");
//           setConfirmPassword("");

//           setShowModal({ updatePassword: false, login: true });
//         } else {
//           setErrors(response?.message);
//         }
//       }
//     } catch (error) {
//       setErrors("Une erreur est survenue, veuillez réessayer plus tard");
//       setLoading(false);
//     }
//   };
  if (!showModal.updatePassword) return <></>;

  return (
    <div className="inset-0 flex items-start justify-center px-5 py-10 lg:py-16 w-full h-full max-h-full absolute z-[999999] bg-black/70">
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
              <span className="text-base font-normal">
                Mise à jour du mot de passe
              </span>
              <br />
              Dynasty Manager Logistics
            </p>
          </div>
          <div className="space-y-5">
            <div className="border-b">
              <InputField
                autoFocus={true}
                onChange={(e) => setCode(e.target.value)}
                placeholder="CODE À 6 CHIFFRES"
                className="border-none bg-transparent px-0"
              />
            </div>
            <div className="border-b">
              <InputField
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="NOUVEAU MOT DE PASSE"
                className="border-none bg-transparent px-0"
              />
            </div>
            <div className="border-b">
              <InputField
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="CONFIRMER NOUVEAU MOT DE PASSE"
                className="border-none bg-transparent px-0"
              />
            </div>

            {errors ? (
              <div className="w-full rounded-md px-4 py-2 flex justify-center items-center bg-red-700/50 text-white capitalize">
                {errors}
              </div>
            ) : null}

            <div className="w-full pt-5 pb-8 space-y-4">
              <Button
                type="submit"
                className="flex justify-center items-center bg-black hover:bg-black/80 w-full px-4 py-3 rounded-full text-white uppercase text-sm"
              >
                {loading ? (
                  <div className="px-8 py-[3px]">
                    <FiLoader className="animate-spin" />
                  </div>
                ) : (
                  "Continuer"
                )}
              </Button>
            </div>

            {/* <div className="text-center text-sm">
              Un email contenant le code de réinitialisation du mot de passe a
              été envoyé à votre adresse email.
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePasswordModal;
