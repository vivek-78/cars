import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string,
    disabled?:boolean,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    containerStyles?:string
}

