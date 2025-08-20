import React, { ButtonHTMLAttributes } from "react";
import "@/app/globals.css";

type ButtonSize = "L" | "M" | "S" | "l" | "m" | "s";
type ButtonStyle = "default" | "outlined" | "filled" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonStyle;
}

const Button = ({
  children,
  className,
  size = "M",
  variant = "default",
  ...rest
}: ButtonProps) => {
  const btnSize = {
    l: "btn-size-l",
    m: "btn-size-m",
    s: "btn-size-s",
  };

  const btnStyle = {
    default: "btn-style-default",
    outlined: "btn-style-outlined",
    filled: "btn-style-filled",
    text: "btn-style-text",
  };

  return (
    <button
      //
      className={`btn-common ${
        btnSize[size.toLowerCase() as keyof typeof btnSize]
      } ${btnStyle[variant]} ${className || ""}`}
      {...rest}
      onClick={() => alert("Hello")}
    >
      <span>{children}</span>
    </button>
  );
};

export { Button };
