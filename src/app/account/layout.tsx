import AccountMenu from "@/components/AccountMenu";

const AccountLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="relative w-10/12 mx-auto flex flex-col lg:grid grid-cols-7 gap-5 min-h-[80vh] text-xs mt-10">
      <AccountMenu />
      {children}
    </div>
  );
};

export default AccountLayout;
