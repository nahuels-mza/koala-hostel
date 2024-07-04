import React from "react";
import { Box, Typography } from "@mui/material";

import useTitleStyles from "./MainTitle.module";

interface IMainTitleProps {
  title: String;
  subtitle: String
}


export default function Title(props: IMainTitleProps) {
  const classes = useTitleStyles();

  return (
    <>
      <Box component="div" >
        <Typography
          variant="h2"
          textAlign="center"

        >
          {props.title}
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"

        >
          {props.subtitle}

        </Typography>
      </Box>
    </>
  );
};
