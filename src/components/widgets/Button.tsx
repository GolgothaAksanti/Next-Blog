/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useCallback } from "react";

type Props = {
  title?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const Button = ({
  title,
  type,
  variant,
  disabled,
  children,
  className = "",
  onClick,
}: Props) => {
  const buttonRef = useCallback(
    (node: HTMLButtonElement) => {
      if (variant === "secondary" && node) {
        node.classList.replace("bg-primary", "bg-secondary");
      }
    },
    [variant, className]
  );

  return (
    <button
      ref={buttonRef}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      className={`${className}`}
    >
      {title || children}
    </button>
  );
};

export default Button;
