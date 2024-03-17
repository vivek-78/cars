"use client";
import React, { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SearchManufatorerProps } from "@/types";
import { manufacturers } from "@/constants";
import Image from "next/image";
export default function SearchManufatorer({
  manufactorer,
  setManufactorer,
}: SearchManufatorerProps) {
  const [query, setQuery] = useState<string>("");
  const filteredManufactrer =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufactorer w-full">
      <Combobox value={manufactorer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              height={20}
              width={20}
              alt="logo"
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="w-15 search-manufacturer__input"
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Volkswagen..."
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredManufactrer.length === 0 && query != "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create {query}
                </Combobox.Option>
              ) : (
                filteredManufactrer.map((item) => (
                  <Combobox.Option
                    value={item}
                    key={item}
                    className="search-manufacturer__option"
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? "text-white"
                                : "text-pribg-primary-purple"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
