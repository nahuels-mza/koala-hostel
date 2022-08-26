import React  from 'react';
import Location from "../Location/Location";
import Confirmation from "../Confirmation/Confirmation";
import Gift from "../Gift/Gift";
import useStyles from "./MainLayout.module";
import Invite from "../Invite/Invite";
import { Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const MainLayout = () => {
  const { classes }= useStyles();

  return (
    <Box component="div" className={classes.container}>
      <Invite />
      <Location />
      <Confirmation />
      <Carousel />
      <Gift />
    </Box>
  );
};

export default MainLayout;
