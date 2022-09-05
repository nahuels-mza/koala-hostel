import React from "react";
import { Box, Typography } from "@mui/material";
import photo from "../../assets/mainPic.jpeg";
import useInviteStyles from "./Invite.module";

const Invite = () => {
  const { classes } = useInviteStyles();

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
        <Typography
          variant="h2"
          textAlign="center"
          className={`${classes.title} ${classes.font}`}
        >
          Bienvenidos a Koala hostel
        </Typography>
        <Typography className={classes.container}>
          <p>
            Somos un hostel Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Fusce sollicitudin blandit ligula, rhoncus tempus elit
            tincidunt ornare. Etiam auctor hendrerit massa, blandit egestas dui.
            Phasellus ultricies non tellus vitae scelerisque.
          </p>
        </Typography>
      </Box>
    </>
  );
};

export default Invite;
