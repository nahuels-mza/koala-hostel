import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Message from "../../components/Message/Message";
import ImageListing from "../../components/Items/ImageList";
import Title from "../../components/Title/MainTitle";
import CommentCarousel from "../../components/Carousel/CommentCarousel";
import { isMobile } from "../../utils/constant";

import { agenciaImages, LorenImpsu } from "../../utils/constant";
import useStylesAgencia from "./Agencia.module";

export default function AgenciaPage() {
  const { classes } = useStylesAgencia();
  // const photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSxu09DcOYlXb66MDzNqt0FaOSvd0pMp99FiiYVVgCJA&s'

  const itemList = isMobile ? 1 : 2
  return (
    <Box component="div" sx={{ textAlign: "-webkit-center" }} className={classes.parallax}>
      <Box component="section" className={classes.imageContainer}>
        <Message instagram={true} whatsMessage='' />
        <Box component="section" className={classes.container}>
          <Title title={"Acacias Agencia de Turismo"} subtitle={LorenImpsu} />
        </Box>
        <Box className={classes.imageContainer} id="imageListin">
          <ImageListing images={agenciaImages} column={itemList} destination={"/hostel/destinations"} />
        </Box>
        <Box className={classes.imageContainer} display="grid" width={"50%"}>
          <CommentCarousel width="50%" height="25%" />
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}
