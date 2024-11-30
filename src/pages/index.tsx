import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import MainPage from "./main";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily: "Public Sans, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Frontend Mentor | Easybank Landing Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100..900&family=Public+Sans:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Righteous&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </>
);
