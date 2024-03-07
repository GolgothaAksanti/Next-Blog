"use client";

import React, { useState } from "react";

import { FiLoader } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

import Button from "./Button";

type Props = {
  className?: string;
  title?: string;
  styleTitle?: string;
  styleIcon?: string;
  onClick: () => void;
};

const SeeMore = ({
  className,
  styleTitle,
  styleIcon,
  title,
  onClick,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Button
      className={`text-sm font-medium flex  items-center justify-center gap-4 bg-gray-900 px-6 py-3 text-white rounded-md ${
        className || " "
      }`}
      onClick={async () => {
        setLoading(true);
        await onClick();
        setLoading(false);
      }}
    >
      {loading ? (
        <div className="px-8">
          <FiLoader className="animate-spin" />
        </div>
      ) : (
        <div className="flex  items-center justify-center gap-4">
          <span className={styleTitle || " "}>{title || `Explorer Tout`}</span>
          <MdArrowOutward className={`text-xl ${styleIcon}`} />
        </div>
      )}
    </Button>
  );
};

export default SeeMore;
