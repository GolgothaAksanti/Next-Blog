"use client";

import React from "react";
import Link from "next/link";

import Button from "./widgets/Button";
import { accountNavs, navs } from "@/libs/constants/topbar.constants";
import { useRecoilState } from "recoil";
import { AccountSidebarStore, SidebarStore } from "@/libs/store/sidebarStore";
import { AiOutlineClose } from "react-icons/ai";

const AccountMenuSideBar = () => {
  const [showSideBar, setShowSidebar] =
    useRecoilState<boolean>(AccountSidebarStore);

  const onClose = () => {
    setShowSidebar(false);
  };

  return (
    showSideBar && (
      <div
        onClick={onClose}
        className="w-full z-10 absolute text-sm lg:hidden text-black h-[100vh] transition-all duration-300 ease-in-out"
      >
        <div className="w-3/4 md:w-1/3 top-16 right-0 shadow  absolute p-10 rounded-xl bg-white px-4">
          <div className="flex flex-col justify-center items-center gap-y-4">

            {accountNavs.slice(0,3).map(({route, name}) => (
                <Link onClick={onClose} className="hover:underline transition-all duration-200 hover:text-gray-800" key={name} href={route}>{name}</Link>
            ))}
            {/* <Link
              onClick={onClose}
              className="hover:underline transition-all duration-200 hover:text-gray-800"
              href="/account/"
            >
              Profile
            </Link>
            <Link
              onClick={onClose}
              className="hover:underline transition-all duration-200 hover:text-gray-800"
              href="/account/blogs"
            >
              Blogs
            </Link> */}
          </div>

          <div className="flex flex-col pt-10 gap-y-4">
            <Button
              onClick={onClose}
              className="bg-black text-gray-200 border-black border rounded-xl px-3 py-2 hover:bg-gray-800 transition-colors"
              title="Logout"
            />
            <Link
              href={accountNavs[3].route}
              onClick={onClose}
              className="border text-center border-red-500 text-red-500 rounded-xl px-3 py-2 hover:bg-gray-100 transition-colors"
            >
              {accountNavs[3].name}
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default AccountMenuSideBar;
