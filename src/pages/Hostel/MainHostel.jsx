import React from "react";
import { Outlet } from 'react-router-dom';
import { Box } from "@mui/material";
// import Location from "../../components/Location/Location";
import Confirmation from "../../components/Confirmation/Confirmation";
import Invite from "../../components/Invite/Invite";
import TitlebarBelowImageList from "../../components/Items/ImageList";
import CustomDateRangePicker from "../../components/Date/Date";
import useStyles from "../MainLayout/MainLayout.module";
import photo from "../../assets/mainPic.jpeg";

const MainHostel = () => {
  const { classes } = useStyles();

  return (
    <Box component="div"
      className={classes.parallax}
      sx={{ backgroundImage: `url(${photo})` }}
    >
      <Box className={classes.imageContainer}>
        <Invite />
      </Box>

      <Box className={classes.imageContainer}>
        <CustomDateRangePicker />
      </Box>

      {/* <Location /> */}


      <Box className={classes.imageContainer}>
        <TitlebarBelowImageList />
      </Box>
      <Confirmation />
      <Outlet />


    </Box>

  );
};

export default MainHostel;
