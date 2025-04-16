import React from "react";
import { Box, Link } from "@mui/material";
import { isMobile } from "../../utils/constant";

import photo from "../../assets/location.png";

const Location = () => {
  const heightImage = isMobile ? "80%" : "400px"
  return (
    <Box
      id="location_section"
    >
      <Link
        href="https://maps.app.goo.gl/m1vkUNfkHbTMXgmm7"
      >
        <img
          id="location_section"
          src={photo}
          alt="Hostel Location"
          loading="lazy"
          style={{
            width: "-webkit-fill-available",
            height: heightImage,
            objectFit: "cover",
            objectPosition: "center"

          }} />

      </Link>
    </Box>
  );
};

export default Location;
