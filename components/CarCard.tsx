"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CustomButton } from ".";
import { calculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";
interface CarCardProps {
  car: CarProps;
}
export default function CarCard({ car }: CarCardProps) {
  const { city_mpg, make, year, model, transmission, drive } = car;
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {year} {model}
        </h2>
      </div>
      <p className="">
        <span className="self-start text-[14px]">$</span>
        <span className="mt-5 font-bold">{carRent}</span>
        <span className="text-[14px]">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering-wheel"
            />
            {transmission === "a" ? "Automatic" : "Manual"}
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="steering-wheel"
            />
            {drive.toUpperCase()}
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src="/gas.svg" width={20} height={20} alt="steering-wheel" />
            {city_mpg}kmpl
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View more"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            titleStyles="text-white"
            btnImg='/right-arrow.svg'
            handleClick={()=>setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} car={car} closeToggle={()=>setIsOpen(false)} />
    </div>
  );
}
