import React from "react";
import Carousel from "react-material-ui-carousel";

import { commentData } from "../../utils/constant";
const CommentCarousel = () => {



  const imageHeight = window.screen.height * 0.4;
  const imageWidth = window.screen.width * 0.4;
  const imageWidthProp = window.screen.width * 0.01;

  return (
    <Carousel
      autoPlay={true}
      height={imageHeight}
      interval={5000}
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
      {commentData.map((item, i) => (
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


export default CommentCarousel;
