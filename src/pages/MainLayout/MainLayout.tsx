import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/MainHeader";
import Footer from "../../components/Footer/MainFooter";
import useStylesAppGenerals from "./MainLayout.module";

const MainLayout = () => {
  const { classes } = useStylesAppGenerals();

  return (
    <Box className={classes.container} >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
