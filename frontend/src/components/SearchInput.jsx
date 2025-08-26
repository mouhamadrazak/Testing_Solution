import React from "react";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search articles…",
}) {
  return (
    <div className="relative">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <input id="search" type="search" value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-4 pr-10 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      />

    </div>
  );
}
