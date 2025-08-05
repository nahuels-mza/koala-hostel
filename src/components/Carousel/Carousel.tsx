import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Grid, Typography } from "@mui/material";
import useCarouselStyles from "./Carousel.module";
import {
  principalCarouselMobile,
  principalCrouselPC,
  isMobile,
} from "../../utils/constant";

const CarouselDinamyc = () => {
  const heightImage = isMobile ? "80%" : "400px";
  const flexOrder = isMobile ? "column" : "row";
  const style = useCarouselStyles();
  const phtos = isMobile ? principalCarouselMobile : principalCrouselPC;
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      animation="slide"
      indicators={false}
      swipe={false}
      indicatorIconButtonProps={{
        style: {
          objectFit: "contain",
        },
      }}
      sx={{
        textAlign: "right",
        id: "carrousel",
        height: heightImage,
      }}
    >
      {phtos.map((item, i) => (
        <Box
          component="section"
          display="flex"
          flexDirection={flexOrder}
          key={i + "carrousel"}
          height={heightImage}
        >
          <Grid
            item
            display="flex"
            flexDirection="column"
            margin={"10px"}
            flexGrow="1"
            width="100%"
            height={heightImage}
          >
            <Typography
              sx={{
                fontSize: "xx-large",
                textAlign: "left",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              key={i + "descriptcion"}
              sx={{
                fontVariant: "h4",
                textAlign: "left",
              }}
            >
              {item.description}
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            height={isMobile ? heightImage : "40px"}
            sx={{
              width: "100%",
            }}
          >
            <img
              key={i + "image"}
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
              className={style.classes.carouselConteiner}
              height={heightImage}
            />
          </Grid>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselDinamyc;
