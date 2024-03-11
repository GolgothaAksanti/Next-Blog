"use client";

import React, { useState } from "react";
import Link from "next/link";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useRecoilState } from "recoil";
import { AccountSidebarStore } from "@/libs/store/sidebarStore";
import AccountMenuSideBar from "./AccountMenuSideBar";
import { accountNavs } from "@/libs/constants/topbar.constants";

const AccountMenu = () => {
  const [openAccountMenu, setOpenAccountMenu] =
    useRecoilState<boolean>(AccountSidebarStore);
  return (
    <div className="bg-slate-50 rounded-xl max-h-[80vh] flex flex-col gap-y-10 justify-start items-center col-span-2 py-4">
      <div className="w-10/12 flex items-center justify-between">
        <Link
          href={accountNavs[0].route}
          className="flex w-2/3 shadow-sm lg:w-full items-center justify-around p-2 rounded-xl bg-white gap-2"
        >
          <span className="w-6 h-6 rounded-full bg-gray-500"></span>
          <p className="text-base font-medium text-gray-700">Golgotha</p>
        </Link>

        <div
          onClick={() => setOpenAccountMenu(!openAccountMenu)}
          className="lg:hidden shadow-sm bg-white p-2 rounded-xl px-5 text-xl"
        >
          {!openAccountMenu ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>

      <div className="hidden lg:flex flex-col gap-y-10 justify-center items-center py-4 w-full">
        <div className="w-10/12 py-10 px-4 bg-white mx-auto rounded-xl text-sm space-y-2 flex flex-col items-center">
          {accountNavs.slice(0, 3).map(({ route, name }) => (
            <Link
              className="p-1 text-black w-full text-left font-medium hover:underline"
              key={route}
              href={route}
            >
              {name}
            </Link>
          ))}
          <p className="p-1 text-black w-full text-left font-medium hover:underline">Logout</p>
        </div>
        <div className="w-10/12 py-2 flex items-center justify-center bg-white rounded-xl">
          <Link
            href={accountNavs[3].route}
            className="text-red-700 font-medium text-base hover:underline"
          >
            {accountNavs[3].name}
          </Link>
        </div>
      </div>
      <AccountMenuSideBar />
    </div>
  );
};

export default AccountMenu;
