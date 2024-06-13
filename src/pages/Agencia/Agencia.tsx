import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Message from "../../components/Message/Message";
import ImageListing from "../../components/Items/ImageList";
import Title from "../../components/Title/MainTitle";
import CommentCarousel from "../../components/Carousel/CommentCarousel";
import Identity from "../../components/Identity/Identity";

import { commentData } from "../../utils/constant";
import useStyles from "../MainLayout/MainLayout.module";

export default function AgenciaPage() {
  const { classes } = useStyles();
  // const photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxu09DcOYlXb66MDzNqt0FaOSvd0pMp99FiiYVVgCJA&s'

  return (
    <Box component="div" className={classes.parallax}>
      <Box component="section" height="100%" className={classes.imageContainer}>
        {/* <Box
          className={classes.parallax}
          sx={{ backgroundImage: `url(${photo})` }}
        /> */}
        <Message />
        <Box component="section" height="100%" className={classes.container}>
          <Title />
        </Box>
        <Box className={classes.imageContainer}>
          <ImageListing images={commentData} column={2} destination="/destinations" />
        </Box>
        <Box className={classes.imageContainer} display="grid" width={"50%"}>
          <CommentCarousel width="50%" height="25%" />
        </Box>
        <Box className={classes.imageContainer}>
          <Identity />
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}
