import React from "react";
import Location from "../Location/Location";
import Confirmation from "../Confirmation/Confirmation";
// import Item from "../Items/Item";
import Invite from "../Invite/Invite";
import useStyles from "./MainLayout.module";
import { Box } from "@mui/material";
// import CarouselDinamyc from "../Carousel/Carrousel";
import TitlebarBelowImageList from "../Items/ImageList";
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

    </Box>
  );
};

export default MainLayout;
