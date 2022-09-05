import React from "react";
import useLocationStyles from "./location.module";
import { Box, Link, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
// import background from "../../assets/locationBackground.png";

const Location = () => {
  const { classes } = useLocationStyles();
  return (
    <Box
      component="div"
      className={classes.imageContainer}
      padding={4}
      sx={{
        // background: `url(${background}) center`,
        backgroundColor: "#b9daf27d",
      }}
      background-size="cover"
      width="100%"
      height="250px"
    >
      <Link
        target="_blank"
        href="https://g.page/koalahostelmendoza?share"
        sx={{ textDecoration: "none", color: "inherit" }}
        className={classes.linkContainer}
      >
        <Typography
          variant="h2"
          textAlign="center"
          className={classes.locationTitle}
        >
          Donde encontrarnos
        </Typography>
        <Box display="flex" justifyContent="center" marginY={2}>
          <PetsIcon className={`${classes.icon}`} fontSize="large" />
        </Box>
      </Link>
    </Box>
  );
};

export default Location;
