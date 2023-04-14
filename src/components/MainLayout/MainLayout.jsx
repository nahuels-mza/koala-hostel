import React from "react";
import Location from "../Location/Location";
import Confirmation from "../Confirmation/Confirmation";
import Gift from "../Gift/Gift";
import useStyles from "./MainLayout.module";
import Invite from "../Invite/Invite";
import { Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import photo from "../../assets/mainPic.jpeg";

const MainLayout = () => {
  const { classes } = useStyles();

  return (
    <Box component="div" className={classes.container}>
      <Box component="section" height="100%" className={classes.imageContainer}>
          <Box
            className={classes.parallax}
            sx={{ backgroundImage: `url(${photo})` }}
          />
        </Box>
      <Invite />
      <Box component="section" height="100px" className={classes.imageContainer}>
          <Box
            className={classes.parallax}
            sx={{ backgroundImage: `url(${photo})` }}
          />
        </Box>
      <Location />
      <Box component="section" height="100px" className={classes.imageContainer}>
          <Box
            className={classes.parallax}
            sx={{ backgroundImage: `url(${photo})` }}
          />
        </Box>
      <Confirmation />
      <Box component="section" height="100px" className={classes.imageContainer}>
          <Box
            className={classes.parallax}
            sx={{ backgroundImage: `url(${photo})` }}
          />
        </Box>
      <Gift />
      <Carousel />
    </Box>
  );
};

export default MainLayout;
