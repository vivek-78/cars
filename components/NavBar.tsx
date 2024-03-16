import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

export default function NavBar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex items-center justify-center px-5">
        <Image
          src="/logo.svg"
          alt="car hub logo"
          className="object-contain"
          width={118}
          height={18}
        />
        
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="rounded-full bg-white text-primary-blue sm:px-16 px-6 py-4"
        />
      </nav>
    </header>
  );
}
