import React from "react";

export function TextInput({ searchValue, handleChange }) {
  return (
    <>
      <label htmlFor="search" className="flex m-0">
        Filtro:
      </label>
      <input
        id="search"
        onChange={handleChange}
        type="search"
        value={searchValue}
        className="mb-10 bg-gray-300 p-4 w-full lg:w-80"
      />
    </>
  );
}
