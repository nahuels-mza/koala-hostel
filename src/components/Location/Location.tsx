import React from "react";
import { Box, Link } from "@mui/material";
import useLocationStyles from "./location.module";

import photo from "../../assets/location_test.jpeg"

const Location = () => {
  const style = useLocationStyles()
  return (
    <Box
      id="location_section"
    >
      <Link
        href="https://maps.app.goo.gl/m1vkUNfkHbTMXgmm7"
      >
        <img
          className={style.classes.containerImage}
          id="location_section"
          src={photo}
          alt="Hostel Location"
          loading="lazy"
        />

      </Link>
    </Box>
  );
};

export default Location;
