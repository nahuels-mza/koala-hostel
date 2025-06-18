import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Message from "../../components/Message/Message";
import Title from "../../components/Title/MainTitle";
import HostelImageListing from "../../components/Items/HostelImageList";
import Location from "../../components/Location/Location";
import CarouselDinamyc from "../../components/Carousel/Carousel";
import BookDateRange from "../../components/Date/Date";

import { hostelImages, isMobile, WhatsAppMessage } from "../../utils/constant";
import useStylesHostelPage from "./MainHostel.module";

const MainHostel = () => {
  const { classes } = useStylesHostelPage();

  React.useEffect(() => {
    const header = document.querySelector("#pageHeader");


    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 76) {
        header?.classList.add(classes.isSticky);
        header?.classList.remove(classes.pageHeader);
      } else {
        header?.classList.remove(classes.isSticky);
        header?.classList.add(classes.pageHeader);
      }
    });
  },);

  return (
    <Box component="div" className={classes.body} sx={{ textAlign: "-webkit-center" }} id="hostel ">
      <Box id="pageHeader">
        <BookDateRange />
      </Box>
      <Box className={classes.container}>
        <Title
          title={"Bien bebidos a Nuestro Hogar"}
          subtitle={""}
        />
      </Box>

      <Box className={classes.container} id="contentContainer">
        <Box className={classes.imageContainer} id="image">
          <HostelImageListing
            images={hostelImages}
            column={isMobile ? 1 : 3}
            destination={"/bedrooms"}
          />
        </Box>
        <Box className={classes.container} id="contentContainer">
        </Box>
        <Box
          className={classes.imageContainer}
          id="carrousel"
          sx={{
            padding: "10px",
            backgroundColor: "white"
          }}
        >
          <CarouselDinamyc />
        </Box>
        <Box className={classes.container} id="contentContainer">
        </Box>
        <Box className={classes.imageContainer} id="location"
        >
          <Location />
        </Box>
      </Box>
      <Message instagram={true} whatsMessage={WhatsAppMessage} />
      <Outlet />
    </Box>
  );
};

export default MainHostel;
