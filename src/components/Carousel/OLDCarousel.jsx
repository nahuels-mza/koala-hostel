import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import koala1 from "../../assets/koala1.png";
import koala2 from "../../assets/koala2.png";
import koala3 from "../../assets/koala3.png";

import useCarouselStyles from "./Carousel.module";

const Carousel = () => {
  const { classes } = useCarouselStyles();

  const itemData = [
    {
      img: koala1,
      title: "koala1",
    },
    {
      img: koala2,
      title: "koala2",
    },
    {
      img: koala3,
      title: "koala3",
    },
  ];

  return (
    <Box component="section">
      <ImageList
        className={classes.image}
        sx={{ width: 900 /* height: 450 */ }}
        variant="masonry"
        cols={4}
        gap={15}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Carousel;
