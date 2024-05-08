import React from "react";
import { Outlet } from 'react-router-dom';
import { Box } from "@mui/material";
import Location from "../../components/Location/Location";
import Confirmation from "../../components/Confirmation/Confirmation";
import Invite from "../../components/Invite/Invite";
import TitlebarBelowImageList from "../../components/Items/ImageList";
import CustomDateRangePicker from "../../components/Date/Date";
import useStyles from "../MainLayout/MainLayout.module";
import photo from "../../assets/mainPic.jpeg";

const MainHostel = () => {
  const { classes } = useStyles();

  return (
    <Box component="div" className={classes.container}>
      <Box component="section" height="100%" className={classes.imageContainer}>
        <Box
          className={classes.parallax}
          sx={{ backgroundImage: `url(${photo})` }}
        />
        <CustomDateRangePicker />
      </Box>

      <Box
        component="section"
        height="100px"
        className={classes.imageContainer}
      >
        <Box
          className={classes.parallax}
          sx={{ backgroundImage: `url(${photo})` }}
        />
      </Box>
      <Location />
      <Invite />
      <Box
        component="section"
        height="100px"
        className={classes.imageContainer}
      >
        <Box
          className={classes.parallax}
          sx={{ backgroundImage: `url(${photo})` }}
        />
      </Box>
      <Confirmation />
      <Box
        component="section"
        height="100px"
        className={classes.imageContainer}
      >
        <Box
          className={classes.parallax}
          sx={{ backgroundImage: `url(${photo})` }}
        />
      </Box>

      <TitlebarBelowImageList />
      <Outlet />
    </Box>

  );
};

export default MainHostel;
