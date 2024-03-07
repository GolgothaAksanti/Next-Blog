/* eslint-disable @next/next/no-img-element */
import React from "react";

const Logo = ({ className, url }: { url?: string; className?: string }) => {
  return (
    <div className={`font-nigante font-semibold text-dp-1 ${className || " "}`}>
      <img
        src={
          url ||
          "https://ik.imagekit.io/dml/store/DML%20-%20Logo%20-%20Black.png?updatedAt=1706561010394"
        }
        alt="logo"
        className="object-cover w-12 h-12"
      />
    </div>
  );
};

export default Logo;
