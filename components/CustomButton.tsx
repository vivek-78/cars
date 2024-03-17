import React from "react";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
export default function CustomButton({
  title,
  handleClick,
  containerStyles,
  disabled,
  btnType,
  titleStyles,
  btnImg,
}: CustomButtonProps) {
  return (
    <div>
      <button
        type={btnType}
        disabled={disabled}
        onClick={handleClick}
        className={`custom-btn ${containerStyles}`}
      >
        <span className={`flex gap-2 ${titleStyles}`}>
          {title}
          {btnImg && <Image src={btnImg} height={20} width={20} alt="btn" />}
        </span>
      </button>
    </div>
  );
}
