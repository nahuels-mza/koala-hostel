import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";

import { commentData } from "../../utils/constant";

// interface ICarouselDinamycPropos {
//   height: string
//   width: string
// }

const CarouselDinamyc = () => {
  return (
    <Box component="section" >
      <Typography variant="h3" textAlign="center">
        Our Services
      </Typography>
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
        }}

      >
        {commentData.map((item, i) => (
          <Box component="section" display="flex" flexDirection="row" key={i + "carrousel"}
            sx={{
              cursor: "pointer",
              pl: 0.2,
              pr: 0.2,
            }}
          >
            <Typography key={i + "text"}
              sx={{
                overflow: "auto",
                width: "70%",
                height: "480px",
                fontVariant: "h4",
                textAlign: "left"
              }}>
              {item.description}
            </Typography>

            <img
              key={i + "image"}
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
              width="60%"
              height="480px"
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselDinamyc;
