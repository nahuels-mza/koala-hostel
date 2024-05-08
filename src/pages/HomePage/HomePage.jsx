import React from "react";
import { Outlet } from 'react-router-dom';
import { Box, Button } from "@mui/material";
import Location from "../../components/Location/Location";

import Invite from "../../components/Invite/Invite";
import useStyles from "../MainLayout/MainLayout.module";


const HomePage = () => {
  const { classes } = useStyles();

  return (
    <Box component="div" className={classes.container}>
      <Box component="section" height="100%" className={classes.container}>
        <Invite />
      </Box>
      <Box className={classes.container}>
        <Location />
        <Button href="/hostel" variant="contained" color="primary" size="large" disableElevation>
          HOSTEL
        </Button>
        <Outlet />

      </Box>
    </Box>
  );
};

export default HomePage;
