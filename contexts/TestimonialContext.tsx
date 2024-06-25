"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Testimonial } from "@/components/interface/types";
type TestimonialContextType = {
  selectedTestimonial: Testimonial | null;
  setSelectedTestimonial: (testimonial: Testimonial | null) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
};

const TestimonialContext = createContext<TestimonialContextType | undefined>(
  undefined
);

export const TestimonialProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <TestimonialContext.Provider
      value={{ selectedTestimonial, setSelectedTestimonial, isDialogOpen, setIsDialogOpen }}
    >
      {children}
    </TestimonialContext.Provider>
  );
};

export const useTestimonial = () => {
  const context = useContext(TestimonialContext);
  if (!context) {
    throw new Error("useTestimonial must be used within a TestimonialProvider");
  }
  return context;
};
