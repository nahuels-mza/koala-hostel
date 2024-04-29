import React from "react";
import Carousel from "react-material-ui-carousel";

import { hostelImages } from "../../utils/constant";

const CarouselDinamyc = () => {
  // const { classes } = useCarouselStyles();


  const imageHeight = window.screen.height * 0.4;
  const imageWidth = window.screen.width * 0.2;
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
          width: `${imageWidth}px`,

          objectFit: "contain",
        },
      }}
    >
      {hostelImages.map((item, i) => (
        <img
          key={i}
          src={`${item.img}`}
          srcSet={`${item.img}`}
          alt={item.title}
          loading="lazy"
          width="100%"
          height={imageHeight}
        />
      ))}
    </Carousel>
  );
};

export default CarouselDinamyc;
