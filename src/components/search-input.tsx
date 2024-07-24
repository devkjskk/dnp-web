"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { LuSearch } from "react-icons/lu";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

interface SearchInputProps {
  searchValue?: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const SearchInput = ({
  searchValue,
  handleSearch,
  className,
}: SearchInputProps) => {
  const [tmpValue, setTmpValue] = useState(searchValue);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch({
        target: { value: tmpValue },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmpValue(e.target.value);
  };

  return (
    <div className="relative flex items-center">
      <LuSearch className="absolute left-3 text-gray-400" />
      <Input
        className={cn("pl-10 w-full", className)}
        placeholder="Search..."
        value={tmpValue}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

SearchInput.propTypes = {
  searchValue: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchInput;
