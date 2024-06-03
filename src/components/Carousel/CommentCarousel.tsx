import React from "react";
import Carousel from "react-material-ui-carousel";

import { imageData } from "../../utils/constant";

interface ICommentCarouselDinamycPropos {
  height: string
  width: string
}

const CommentCarousel = (props: ICommentCarouselDinamycPropos) => {

  return (
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
      {imageData.map((item, i) => (
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
  );
};


export default CommentCarousel;
