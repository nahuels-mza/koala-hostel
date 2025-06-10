import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./route";

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
    fontFamily: ["Open Sans"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
