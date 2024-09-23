import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Message from "../../components/Message/Message";
import ImageListing from "../../components/Items/ImageList";
import Title from "../../components/Title/MainTitle";
import CommentCarousel from "../../components/Carousel/CommentCarousel";
import { isMobile } from "../../utils/constant";

import { commentData, LorenImpsu } from "../../utils/constant";
import useStyles from "../MainLayout/MainLayout.module";

export default function AgenciaPage() {
  const { classes } = useStyles();
  // const photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxu09DcOYlXb66MDzNqt0FaOSvd0pMp99FiiYVVgCJA&s'

  const itemList = isMobile() ? 2 : 4
  return (
    <Box component="div" className={classes.parallax}>
      <Box component="section" height="100%" className={classes.imageContainer}>
        {/* <Box
          className={classes.parallax}
          sx={{ backgroundImage: `url(${photo})` }}
        /> */}
        <Message />
        <Box component="section" height="100%" className={classes.container}>
          <Title title={"Acacias Agencia de Turismo"} subtitle={LorenImpsu} />
        </Box>
        <Box className={classes.imageContainer}>
          <ImageListing images={commentData} column={itemList} destination="/destinations" />
        </Box>
        <Box className={classes.imageContainer} display="grid" width={"50%"}>
          <CommentCarousel width="50%" height="25%" />
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}
