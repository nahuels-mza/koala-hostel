import React from "react";
import { Outlet } from 'react-router-dom';
import { Box, Typography } from "@mui/material";

import Message from "../../components/Message/Message";
import Title from "../../components/Title/MainTitle";
import ImageListing from "../../components/Items/ImageList";
import CustomDateRangePicker from "../../components/Date/Date";
import CarouselDinamyc from "../../components/Carousel/Carousel";
import CommentCarousel from "../../components/Carousel/CommentCarousel";
import { hostelImages } from '../../utils/constant';
import useStyles from "../MainLayout/MainLayout.module";
// import photo from "../../assets/mainPic.jpeg";

const MainHostel = () => {
  const { classes } = useStyles();

  return (
    <Box component="div"
      className={classes.parallax}
    // sx={{ backgroundImage: `url(${photo})` }}
    >
      <Box className={classes.imageContainer}>
        <Title />
      </Box>

      <Box className={classes.imageContainer}>
        <CustomDateRangePicker />
      </Box>

      <Box className={classes.imageContainer}>
        <ImageListing images={hostelImages} column={3} />
      </Box>

      <Box className={classes.imageContainer} >
        <Typography
          variant="h5"
          textAlign="center"> Nuestros Servicios
        </Typography>
        <Box display='grid' className={classes.imageContainer}
          flexDirection={'column'} gridAutoFlow={'column'}>
          <CarouselDinamyc />
          <CommentCarousel />
        </Box>
      </Box>
      <Message />
      <Outlet />


    </Box>

  );
};

export default MainHostel;
