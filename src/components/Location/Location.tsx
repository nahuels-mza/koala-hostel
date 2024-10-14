import React from "react";
import useLocationStyles from "./location.module";
import { Box, Link, Typography } from "@mui/material";

import photo from "../../assets/location.png";

const Location = () => {
  const { classes } = useLocationStyles();
  return (
    <Box
      id="location_section"
      component="div"
      className={classes.containerImage}
      sx={{
        backgroundImage: `url(${photo})`,
        backgroundColor: "#b9daf27d",
      }}
    >
      <Link
        target="_blank"
        href="https://maps.app.goo.gl/eSkZvL8tN7aeYL3z9"
        sx={{ textDecoration: "none", color: "inherit" }}
        className={classes.linkContainer}
      >
        <Typography
          variant="h2"
          textAlign="center"
          className={classes.locationTitle}
        >
          Donde estamos
        </Typography>

      </Link>
    </Box>
  );
};

export default Location;
