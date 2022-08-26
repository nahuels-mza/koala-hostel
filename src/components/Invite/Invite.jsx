import React from "react";
import { Box, Typography } from "@mui/material";
import photo from "../../assets/mainPic.jpeg";
import useInviteStyles from "./Invite.module";

const Invite = () => {
  const { classes }= useInviteStyles();

  return (
    <>
      <Box component="section" className={classes.container}>
        <Box component="section" className={classes.imageContainer}>
          <Box
            className={classes.parallax}
            sx={{ backgroundImage: `url(${photo})` }}
          />
        </Box>
      </Box>

      <Box component="div" className={classes.textContainer}>
        <Box className={classes.nameContainer}>
          <Typography variant="h2" textAlign="center" className={classes.name}>
            AGOS
          </Typography>
        </Box>
        <Typography
          variant="h2"
          textAlign="center"
          className={`${classes.title} ${classes.font}`}
        >
          Save the Date
        </Typography>
        <Box className={classes.dateContainer}>
          <Typography variant="h4" textAlign="center" className={classes.date}>
            08 | 10 | 22
          </Typography>
        </Box>

      </Box>

      {/* </Box> */}
    </>
  );
};

export default Invite;
