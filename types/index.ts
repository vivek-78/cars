import CarDetails from "@/components/CarDetails";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  btnType?: "submit" | "button" | "reset";
  titleStyles?: string;
  btnImg?: string;
}

export interface SearchManufatorerProps {
  manufacturer: string;
  setManuFacturer: (manufactorer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetailProps {
  closeToggle: () => void;
  isOpen: boolean;
  car: CarProps;
}
