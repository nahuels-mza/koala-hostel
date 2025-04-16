import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";
import { servicesData, isMobile } from "../../utils/constant";

const CarouselDinamyc = () => {
  const heightImage = isMobile ? "80%" : "400px"
  const flexOrder = isMobile ? "column" : "row"
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
        textAlign: 'right',
        id: "carrousel",
        height: heightImage,

      }}

    >
      {servicesData.map((item, i) => (
        <Box component="section" display="flex" flexDirection={flexOrder} key={i + "carrousel"}
        >
          <Box display="flex" flexDirection="column" >
            <Typography
              sx={{
                fontSize: "xx-large",
                textAlign: "left",

              }}>
              {item.title}
            </Typography>
            <Typography key={i + "descriptcion"}
              sx={{
                fontVariant: "h4",
                textAlign: "left",
                height: heightImage
              }}>
              {item.description}
            </Typography>
          </Box>

          <img
            key={i + "image"}
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
            style={{
              width: "-webkit-fill-available",
              maxWidth: "60%",
              maxHeight: heightImage,
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </Box>
      ))}
    </Carousel>

  );
};

export default CarouselDinamyc;
