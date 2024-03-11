const AccountContentWrapper = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className="bg-slate-50 p-4 h-[75vh] rounded-xl w-full col-span-5">
      {children}
    </div>
  );
};

export default AccountContentWrapper;
