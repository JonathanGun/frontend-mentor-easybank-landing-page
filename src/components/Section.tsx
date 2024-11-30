import { Box } from "@mui/material";
import React from "react";

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <Box
      component="section"
      className={`flex flex-col w-full items-center justify-center px-6 py-16 ${className}`}
    >
      {children}
    </Box>
  );
};

export default Section;
