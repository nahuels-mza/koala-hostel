import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";

import { commentData } from "../../utils/constant";

interface ICarouselDinamycPropos {
  height: string
  width: string
}

const CarouselDinamyc = (props: ICarouselDinamycPropos) => {
  return (
    <Box component="section" >
      <Typography variant="h3" textAlign="center">
        Lo que se puede hacer
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
          textAlign: 'center'
        }}
      >
        {commentData.map((item, i) => (
          <Box component="section" display="flex" flexDirection="row"
            sx={{ cursor: "pointer", pl: 2, pr: 2 }}
          >
            <Typography variant="h6" textAlign="center"
              maxHeight="150px" width={props.width}
              sx={{ overflow: "auto", height: "100%" }}>
              {item.description}
            </Typography>

            <img
              key={i}
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
              width={props.width}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselDinamyc;
