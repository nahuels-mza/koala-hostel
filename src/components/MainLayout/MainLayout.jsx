import React from "react";
import Location from "../Location/Location";
import Confirmation from "../Confirmation/Confirmation";
import Gift from "../Item/Items";
import useStyles from "./MainLayout.module";
import { Box } from "@mui/material";
import CarouselDinamyc from "../Carousel/Carrousel";
import photo from "../../assets/mainPic.jpeg";

const MainLayout = () => {
  const { classes } = useStyles();

  return (
    <Box component="div" className={classes.container}>
      <Box component="section" height="100%" className={classes.imageContainer}>
        <Box
          className={classes.parallax}
          sx={{ backgroundImage: `url(${photo})` }}
        />
      </Box>

      <Box
        component="section"
        height="100px"
        className={classes.imageContainer}
      >
        <Box
          className={classes.parallax}
          sx={{ backgroundImage: `url(${photo})` }}
        />
      </Box>
      <Location />
      <Box
        component="section"
        height="100px"
        className={classes.imageContainer}
      >
        <Box
          className={classes.parallax}
          sx={{ backgroundImage: `url(${photo})` }}
        />
      </Box>
      <Confirmation />
      <Box
        component="section"
        height="100px"
        className={classes.imageContainer}
      >
        <Box
          className={classes.parallax}
          sx={{ backgroundImage: `url(${photo})` }}
        />
      </Box>
      <Gift />
      <CarouselDinamyc />
    </Box>
  );
};

export default MainLayout;
