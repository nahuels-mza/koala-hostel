import React from "react";
import { Outlet } from 'react-router-dom';
import { Box } from "@mui/material";
import Location from "../../components/Location/Location";

import Invite from "../../components/Invite/Invite";
import useStyles from "../MainLayout/MainLayout.module";


const AgenciaPage = () => {
  const { classes } = useStyles();

  return (
    <Box component="div" className={classes.parallax}>
      <Box component="section" height="100%" className={classes.container}>
        <Invite />
      </Box>
      <Box className={classes.imageContainer}>
        <Location />
        <Box className={classes.container}>

        </Box>

      </Box>
      <Outlet />
    </Box>
  );
};

export default AgenciaPage;
