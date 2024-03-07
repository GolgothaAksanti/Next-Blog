"use client";

import React from "react";
import Link from "next/link";

import Button from "./widgets/Button";
import { navs } from "@/libs/constants/topbar.constants";
import { useRecoilState } from "recoil";
import { SidebarStore } from "@/libs/store/sidebarStore";

const SideBar = () => {
  const [showSideBar, setShowSidebar] = useRecoilState<boolean>(SidebarStore);

  const onClose = () => {
    setShowSidebar(false);
  };

  return (
    showSideBar && (
      <div
        onClick={onClose}
        className="w-full z-10 absolute text-sm block lg:hidden text-black h-[100vh] transition-all duration-300 ease-in-out bg-gray-900 bg-opacity-20"
      >
        <div className="w-1/2 absolute h-screen right-0 pt-10 bg-white px-4">
          <div className="flex flex-col justify-center items-center gap-y-4">
            {navs.map((nav) => (
              <Link
                onClick={onClose}
                className="hover:underline transition-all duration-200 hover:text-gray-800"
                key={nav.name}
                href={nav.route}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col pt-10 gap-y-4">
            <Button
              onClick={onClose}
              className="bg-black text-gray-200 rounded-full px-3 py-2 hover:bg-gray-800 transition-colors"
              title="Explore features"
            />
            <Button
              onClick={onClose}
              className="border border-gray-300 rounded-full px-3 py-2 hover:bg-gray-100 transition-colors"
              title="Join us"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default SideBar;
