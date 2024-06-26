import React from "react";
import { Box, Typography } from "@mui/material";

import useTitleStyles from "./MainTitle.module";

const Title = () => {
  const { classes } = useTitleStyles();

  return (
    <>
      <Box component="div" className={classes.container}>
        <Typography
          variant="h2"
          textAlign="center"
          className={` ${classes.font}`}
        >
          Acacias Turismo Mendoza
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"
          className={` ${classes.font}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus iaculis orci sed pulvinar. Praesent porttitor diam id risus facilisis.
        </Typography>
      </Box>
    </>
  );
};

export default Title;
