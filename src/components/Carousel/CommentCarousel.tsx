import React from "react";
import Carousel from "react-material-ui-carousel";

import { allImagesCarouselMobile } from "../../utils/constant";
import { Box, Grid } from "@mui/material";

const CommentCarouselMobile = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "-webkit-center",
      }}
    >

      <Carousel
        autoPlay={true}
        interval={5000}
        animation="slide"
        indicators={true}
        indicatorIconButtonProps={{
          style: {
            objectFit: "contain",
          },
        }}
        sx={{
          textAlign: "-webkit-center",
          backgroundColor: "white",
        }}
      >
        {allImagesCarouselMobile.map((img, index) => (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box
                component="img"
                src={img}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: "80%",
                  height: 500, // Fixed height
                  objectFit: "cover", // Or 'contain' depending on your need
                  borderRadius: 2,
                  display: "block",
                  mx: "auto",
                  backgroundColor: "#eee", // Fallback if image is small or fails
                }}
              />
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};

export default CommentCarouselMobile;
