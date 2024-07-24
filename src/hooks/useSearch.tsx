"use client";

import { useState } from "react";

interface UseSearchProps {
  defaultValue?: string;
}

export const useSearch = ({ defaultValue = "" }: UseSearchProps = {}) => {
  const [searchValue, setSearchValue] = useState(defaultValue);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return {
    handleSearch,
    searchValue,
  };
};
