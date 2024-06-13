import React from "react";
import Carousel from "react-material-ui-carousel";

import { agenciaImages } from "../../utils/constant";
import { Box, Typography } from "@mui/material";

interface ICommentCarouselDinamycPropos {
  height: string
  width: string
}

const CommentCarousel = (props: ICommentCarouselDinamycPropos) => {

  return (
    <Box component="section" >
      <Typography variant="h3" textAlign="center">
        Lo que se dice de nosotros
      </Typography>
      <Carousel
        autoPlay={true}
        interval={5000}
        animation="slide"
        indicators={false}
        navButtonsAlwaysInvisible={true}
        indicatorIconButtonProps={{
          style: {
            objectFit: "contain",
          },
        }}
        sx={{
          textAlign: 'center',
        }}
      >
        {agenciaImages.map((item, i) => (
          <img
            key={i}
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
            width={props.width}
            height={props.height}
          />


        ))}
      </Carousel>
    </Box>
  );
};


export default CommentCarousel;
