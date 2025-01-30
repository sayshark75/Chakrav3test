"use client";
import { Provider } from "@/components/ui/provider";
import React from "react";

const AllContextProviders = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

export default AllContextProviders;
