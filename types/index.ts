import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  btnType?: "submit" | "button" | "reset";
}

export interface SearchManufatorerProps {
  manufactorer: string;
  setManufactorer: (manufactorer: string) => void;
}

export interface CarCardProps{
      "city_mpg": number,
      "class": string,
      "combination_mpg": number,
      "cylinders": number,
      "displacement": number,
      "drive": string,
      "fuel_type": string,
      "highway_mpg": number,
      "make": string,
      "model": string,
      "transmission": "a",
      "year": number
}
