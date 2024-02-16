import React from "react";
import Carousel from "react-material-ui-carousel";

import image1 from "../../assets/koala1.png";
import image2 from "../../assets/koala2.png";
import image3 from "../../assets/koala3.jpeg";

const CarouselDinamyc = () => {
  // const { classes } = useCarouselStyles();

  const itemData = [
    {
      img: image1,
      title: "image1",
    },
    {
      img: image2,
      title: "image2",
    },
    {
      img: image3,
      title: "image3",
    },
  ];

  const imageHeight = window.screen.height * 0.4;
  const imageWidth = window.screen.width * 0.2;
  return (
    <Carousel
      autoPlay={true}
      height={imageHeight}
      interval={3000}
      timeout={1000}
      animation="slide"
      indicatorIconButtonProps={{
        style: {
          padding: "1px",
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          objectFit: "contain",
        },
      }}
    >
      {itemData.map((item, i) => (
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
