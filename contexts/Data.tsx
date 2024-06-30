"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Data } from "@/components/interface/types";
type DataContextType = {
  selectedData: Data | null;
  setSelectedData: (Data: Data | null) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
};

const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [selectedData, setSelectedData] = useState<Data | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DataContext.Provider
      value={{ selectedData, setSelectedData, isDialogOpen, setIsDialogOpen }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
