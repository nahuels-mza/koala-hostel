import React from "react";
import { Box, Typography } from "@mui/material";

import useInviteStyles from "./Invite.module";

const Invite = () => {
  const { classes } = useInviteStyles();

  return (
    <>
      <Box component="div" className={classes.textContainer}>
        <Typography
          variant="h2"
          textAlign="center"
          className={`${classes.title} ${classes.font}`}
        >
          Acacias Turismo Mendoza
        </Typography>
      </Box>
    </>
  );
};

export default Invite;
