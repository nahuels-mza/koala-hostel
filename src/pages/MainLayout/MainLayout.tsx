import React from "react";
import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';
import Footer from "../../components/Footer/MainFooter";
import Header from "../../components/Header/Header";


const MainLayout = () => {
  // const { classes } = useStyles();


  return (
    <Box >
      <Header />
      <Outlet />
      <Footer />
    </Box>

  );
};

export default MainLayout;
