"use client";

import "./globals.css";
import { RecoilRoot } from "recoil";
import { Lato } from "next/font/google";

import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import ResetPasswordModal from "@/components/modals/ResetPasswordModal";
import UpdatePasswordModal from "@/components/modals/UpdatePasswordModal";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body className={`${lato.className} scrollbar`}>
          <LoginModal />
          <RegisterModal />
          <ResetPasswordModal />
          <UpdatePasswordModal />
          {/* <SearchModal />
          <SignOutModal />
          */}
          <div className="relative lg:w-10/12 mx-auto max-w-[1440px]">
            <TopBar />
            <SideBar />
            {children}
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}
