"use client";

import { useState } from "react";

export const useSelectItem = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const onSelectItem = (id: number) => {
    setSelectedItem(id);
  };

  const onDeselectItem = () => {
    setSelectedItem(null);
  };

  return {
    selectedItem,
    onSelectItem,
    onDeselectItem,
  };
};
