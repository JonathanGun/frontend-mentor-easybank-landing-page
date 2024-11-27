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
  <title>Frontend Mentor | Easybank Landing Page</title>
);
