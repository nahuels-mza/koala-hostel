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
    <Box component="div" className={classes.parallax} sx={{ textAlign: "-webkit-center" }} id="hostel ">
      <Box id="pageHeader">
        <BookDateRange />
      </Box>
      <Box className={classes.container}>
        <Title
          title={"Hostel Plaza"}
          subtitle={"Bienvenidos a Mendoza"}
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

        <Box className={classes.imageContainer} id="location"
          sx={{
            border: "1.5px solid",
            borderColor: "#145357"
          }}>
          <Location />
        </Box>
        <Box
          className={classes.imageContainer}

          id="carrousel"
        >
          <CarouselDinamyc />
        </Box>
        {/* <Box
          className={classes.imageContainer}
          flexDirection={"row"}
          gridAutoFlow={"row"}
          width={"50%"}
          height={"50%"}
        >
          <CommentCarousel width="50%" height="50%" />
        </Box> */}
      </Box>
      <Message instagram={true} whatsMessage={WhatsAppMessage} />
      <Outlet />
    </Box>
  );
};

export default MainHostel;
