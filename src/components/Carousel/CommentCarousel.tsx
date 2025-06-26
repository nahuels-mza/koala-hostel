import React from "react";
import Carousel from "react-material-ui-carousel";

import { allImages, isMobile } from "../../utils/constant";
import { Box, Grid, Typography } from "@mui/material";



const CommentCarousel = () => {

  function pcList(data: string[]) {
    const element = [];
    for (let i = 0; i < data.length; i = i + 3) {
      element.push({ img: data[i], img2: data[i + 1], img3: data[i + 2] })
    }
    return element
  }

  return (
    <Box component="section" sx={{
      textAlign: "-webkit-center",
    }}>
      <Typography variant="h3" textAlign="center">
        Welcome and Bienvenidos
      </Typography>
      <Carousel
        autoPlay={true}
        interval={5000}
        animation="slide"
        // indicators={false}
        navButtonsAlwaysInvisible={true}
        indicatorIconButtonProps={{
          style: {
            objectFit: "contain",
          },
        }}
        sx={{
          textAlign: "-webkit-center",
          backgroundColor: "white"
        }}
      >
        {isMobile ? <> {allImages.map((img, index) => (

          <Box key={index} sx={{ padding: 2 }} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} >

                <img
                  src={img.split(' ')[0]}
                  alt={`Slide ${index + 1}`}
                  style={{ width: '50vw', borderRadius: 8 }}
                />
              </Grid>
            </Grid>

          </Box>
        )
        )
        }</> : pcList(allImages).map((imgs) =>
          <Box key={"contain"} sx={{ padding: 2 }}>
            <Grid container spacing={2}>
              {[imgs.img, imgs.img2, imgs.img3].map((img, i) =>
                <Grid item xs={12} sm={4} key={i}>
                  <img
                    src={img}
                    alt={`Slide ${i + 1} - ${i + 1}`}
                    style={{ width: '400px', borderRadius: 8, height: "500px" }}
                  />
                </Grid>
              )}
            </Grid>
          </Box>)


        }
      </Carousel>
    </Box>
  );
};


export default CommentCarousel;
