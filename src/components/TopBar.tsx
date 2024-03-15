"use client";

import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { navs } from "@/libs/constants/topbar.constants";
import Button from "./widgets/Button";
import { SidebarStore } from "@/libs/store/sidebarStore";
import {
  AuthenticationModalState,
  AuthenticationState,
  UserStore,
} from "@/libs/store/authenticationStore";
import {
  IAuthentication,
  IAuthor,
} from "@/libs/interfaces/authernication.interface";
import MyImage from "./widgets/MyImage";
import { profileImagePlaceholder } from "@/libs/constants/authentication.constants";
import { isValidImageUrl } from "@/libs/utils/verify.image.url";

const TopBar = () => {
  const [showSideBar, setShowSidebar] = useRecoilState<boolean>(SidebarStore);
  const setShowLoginModal = useSetRecoilState<IAuthentication>(
    AuthenticationModalState
  );
  const auth = useRecoilValue<boolean>(AuthenticationState);
  const user = useRecoilValue<IAuthor | null>(UserStore);

  const onLogin = (): void => {
    setShowLoginModal({ login: true, register: false });
    document.body.classList.add("overflow-hidden");
    document.body.classList.add("h-screen");
    document.body.classList.add("max-h-screen");
    window.document?.body.setAttribute(
      "style",
      "position: fixed; top: 0; left: 0; right: 0;"
    );
  };

  const onRegister = (): void => {
    setShowLoginModal({ login: false, register: true });
    document.body.classList.add("overflow-hidden");
    document.body.classList.add("h-screen");
    document.body.classList.add("max-h-screen");
    window.document?.body.setAttribute(
      "style",
      "position: fixed; top: 0; left: 0; right: 0;"
    );
  };

  return (
    <div className="w-full text-xs py-5 ">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <div className="flex items-center text-sm justify-start gap-x-4 font-semibold">
          <Link
            className="hover:underline transition-all duration-200 hover:text-gray-800"
            href="/"
          >
            <div className="w-4 h-4 bg-gradient-to-tl from-gray-500 to-black rotate-45" />
          </Link>
          {navs.map((nav) => (
            <Link
              className="hover:underline hidden lg:block transition-all duration-200 hover:text-gray-800"
              key={nav.name}
              href={nav.route}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        {!auth && !user ? (
          <div className="hidden lg:flex justify-end gap-x-4 items-center">
            <Button
              onClick={onLogin}
              className="bg-black text-gray-200 rounded-full px-3 py-2 hover:bg-gray-800 transition-colors"
              title="Sign in"
            />
            <Button
              onClick={onRegister}
              className="border border-gray-300 rounded-full px-3 py-2 hover:bg-gray-100 transition-colors"
              title="Sign up"
            />
          </div>
        ) : (
          <div className="hidden lg:flex justify-end gap-x-4 items-center">
            <Link
              href="/account/" className="w-10 h-10 rounded-full bg-slate-500">
            <MyImage
                src={
                 user && isValidImageUrl(user?.image)
                    ? user?.image
                    : profileImagePlaceholder
                }
                className="overflow-hidden rounded-full"
                alt="profile-image"
              />
            </Link>
          </div>
        )}
        <div className="flex lg:hidden justify-end gap-x-4 items-center">
          {auth && user && (
            <Link
              href="/account/"
              className="w-7 h-7 cursor-pointer rounded-full bg-slate-500"
            >
              <MyImage
                src={
                  isValidImageUrl(user?.image)
                    ? user?.image
                    : profileImagePlaceholder
                }
                className="overflow-hidden rounded-full"
                alt="profile-image"
              />
            </Link>
          )}
          <div onClick={() => setShowSidebar(!showSideBar)} className="">
            {showSideBar ? (
              <RxCross1 className="text-xl" />
            ) : (
              <GiHamburgerMenu className="text-xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
