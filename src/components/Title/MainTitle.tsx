import React from "react";
import { Box, Typography } from "@mui/material";

interface IMainTitleProps {
  title: String;
  subtitle: String
}


export default function Title(props: IMainTitleProps) {

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
