"use client";
import React from "react";
import { CustomButton } from ".";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book or rent a car quickly and easily
        </h1>
        <p className="hero__subtitle">
          stream your car rental experience with effortless booking process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue rounded-full text-white mt-10"
        />
        <div className="hero_image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
            <div className="hero__image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
