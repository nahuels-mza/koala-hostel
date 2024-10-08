import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "./pages/MainLayout/MainLayout";
import "./index.css";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#145357'
    },
    secondary: {
      main: '#FEF8EC'
    }
  },
  typography: {
    fontFamily: ["Arial", "Open Sans"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
