"use client";
import React, { useState } from "react";
import { SearchManufatorer } from ".";
export default function SearchBar() {
  const [manufactorer, setManufactorer] = useState<string>("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufatorer 
         manufactorer = {manufactorer}
         setManufactorer = {setManufactorer}
        />
      </div>
    </form>
  );
}
