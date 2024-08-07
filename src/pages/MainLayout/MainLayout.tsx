import React from "react";
import { Box, Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/MainHeader";

const MainLayout = () => {
  // const { classes } = useStyles();

  return (
    <Box>
      <Header />
      <Outlet />
      <Button
        href="/hostel"
        variant="contained"
        color="primary"
        size="large"
        disableElevation
      >
        HOSTEL
      </Button>
      <Button
        href="/agencia"
        variant="contained"
        color="secondary"
        size="large"
        disableElevation
      >
        AGENCIA
      </Button>

    </Box>
  );
};

export default MainLayout;
