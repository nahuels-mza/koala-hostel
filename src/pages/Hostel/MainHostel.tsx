import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Message from "../../components/Message/Message";
import Title from "../../components/Title/MainTitle";
import ImageListing from "../../components/Items/ImageList";
import Location from "../../components/Location/Location";
import CarouselDinamyc from "../../components/Carousel/Carousel";
import CommentCarousel from "../../components/Carousel/CommentCarousel";

import { hostelImages } from "../../utils/constant";
import useStyles from "../MainLayout/MainLayout.module";
// import photo from "../../assets/mainPic.jpeg";

const MainHostel = () => {
  const { classes } = useStyles();

  return (
    <Box
      component="div"
      className={classes.parallax}
    // sx={{ backgroundImage: `url(${photo})` }}
    >
      <Box className={classes.imageContainer}>
        <Title />
      </Box>

      <Box className={classes.imageContainer}>
        <ImageListing images={hostelImages} column={3} destination="/bedrooms" />
      </Box>

      <Box className={classes.imageContainer}>
        <Location />
      </Box>
      <Box className={classes.imageContainer}>
        <Box
          className={classes.imageContainer}
          flexDirection={"row"}
          gridAutoFlow={"column"}
        >
          <CarouselDinamyc width="50%" height="50%" />
        </Box>
        <Box
          className={classes.imageContainer}
          flexDirection={"row"}
          gridAutoFlow={"row"}
          width={"50%"}
          height={"50%"}
        >
          <CommentCarousel width="50%" height="50%" />
        </Box>
      </Box>
      <Message />
      <Outlet />
    </Box>
  );
};

export default MainHostel;
