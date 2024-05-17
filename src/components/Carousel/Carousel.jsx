import React from "react";
import Carousel from "react-material-ui-carousel";

import { imageData } from "../../utils/constant";

const CarouselDinamyc = () => {
  // const { classes } = useCarouselStyles();


  const imageHeight = window.screen.height * 0.4;
  const imageWidth = window.screen.width * 0.4;
  const imageWidthProp = window.screen.width * 0.01;
  return (
    <Carousel
      autoPlay={true}
      height={imageHeight}
      interval={3000}
      timeout={1000}
      animation="slide"
      indicators="false"
      indicatorIconButtonProps={{
        style: {
          width: `${imageWidthProp}px`,
          objectFit: "contain",
        },
      }}
      sx={{
        textAlign: 'center'
      }}
    >
      {imageData.map((item, i) => (
        <img
          key={i}
          src={`${item.img}`}
          srcSet={`${item.img}`}
          alt={item.title}
          loading="lazy"
          width={imageWidth}
          height={imageHeight}
        />
      ))}
    </Carousel>
  );
};

export default CarouselDinamyc;
