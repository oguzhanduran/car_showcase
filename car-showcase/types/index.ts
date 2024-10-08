import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>; // sometimes it will be submit button that's why we added optional ? mark
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: number;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: number;
  fuel_type: number;
  highway_mpg: number;
  make: number;
  model: number;
  transmission: number;
  year: number;
}