import React from "react";
import Carousel from "react-material-ui-carousel";

import { allImagesCarouselWeb } from "../../utils/constant";
import { Box, Grid } from "@mui/material";


const CommentCarouselWeb = () => {
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
        {allImagesCarouselWeb.map((group, index) => (
          <Box key={index} sx={{ padding: 2 }}>
            <Grid container spacing={2}>
              {[group.img, group.img2, group.img3].map((img, i) => (
                <Grid item xs={12} sm={4} key={i}>
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
                    }}></Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CommentCarouselWeb;
