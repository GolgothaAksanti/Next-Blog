"use client";

import "./globals.css";
import { RecoilRoot } from "recoil";
import { Lato } from "next/font/google";
// import { Inter } from "next/font/google";

import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body className={lato.className}>
          <div className="relative">
            <TopBar />
            <SideBar />
            {children}
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}
