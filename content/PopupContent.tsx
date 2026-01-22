"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type PopupContextType = {
  isOpen: boolean;
  togglePopup: (value?: boolean) => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = (value?: boolean) => {
    if (typeof value === "boolean") setIsOpen(value);
    else setIsOpen((prev) => !prev);
  };

  return (
    <PopupContext.Provider value={{ isOpen, togglePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
