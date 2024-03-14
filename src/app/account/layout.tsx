"use client"

import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

import AccountMenu from "@/components/AccountMenu";
import { IAuthor } from "@/libs/interfaces/authernication.interface";
import { AuthenticationState, UserStore } from "@/libs/store/authenticationStore";

const AccountLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const auth = useRecoilValue<boolean>(AuthenticationState);
  const user = useRecoilValue<IAuthor | null>(UserStore);

  const router = useRouter();

  if(!auth && !user) router.push("/")

  return (
    <div className="relative w-10/12 mx-auto flex flex-col lg:grid grid-cols-7 gap-5 min-h-[80vh] text-xs mt-10">
      <AccountMenu />
      {children}
    </div>
  );
};

export default AccountLayout;
