import { useState } from "react";

export const useToggleViewForm = (status: boolean = true) => {
  const [canView, setCanView] = useState(status);

  const toggleView = () => {
    setCanView(!canView);
  };

  return { canView, toggleView };
};
