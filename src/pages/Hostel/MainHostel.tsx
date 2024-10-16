import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Message from "../../components/Message/Message";
import Title from "../../components/Title/MainTitle";
import ImageListing from "../../components/Items/ImageList";
import Location from "../../components/Location/Location";
import CarouselDinamyc from "../../components/Carousel/Carousel";
// import CommentCarousel from "../../components/Carousel/CommentCarousel";
import BookDateRange from "../../components/Date/Date";

import { hostelImages } from "../../utils/constant";
import { isMobile } from "../../utils/constant";
import useStylesHostelPage from "./MainHostel.module";

// import photo from "../../assets/mainPic.jpeg";

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
      <Box className={classes.imageContainer}>
        <Title
          title={"Acacias Hostel"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />
      </Box>

      <Box className={classes.container} id="contentContainer">
        <Box
          className={classes.imageContainer}
          flexDirection={"row"}
          gridAutoFlow={"column"}
          id="carrousel"
          sx={{
            width: "100%",
            height: "50%"
          }}>
          <CarouselDinamyc />
        </Box>


        <Box className={classes.imageContainer} id="image">
          <ImageListing
            images={hostelImages}
            column={isMobile ? 1 : 3}
            destination={window.location.href + "/bedrooms"}
          />
        </Box>

        <Box className={classes.imageContainer} id="location"
          sx={{
            width: "100%"
          }}>
          <Location />
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
      <Message />
      <Outlet />
    </Box>
  );
};

export default MainHostel;
