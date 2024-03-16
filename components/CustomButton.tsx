import React from "react";
import { CustomButtonProps } from "@/types";
export default function CustomButton({
  title,
  handleClick,
  containerStyles,
  disabled,
  btnType,
}: CustomButtonProps) {
  return (
    <div>
      <button
        type={btnType}
        disabled={false}
        onClick={handleClick}
        className={`custom-btn ${containerStyles}`}
      >
        <span>{title}</span>
      </button>
    </div>
  );
}
