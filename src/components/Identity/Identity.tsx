import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { ownerData } from "../../utils/constant";
import useIdentityStyles from "./Identity.module";
import acacia from "../../assets/rounded-logo.png";
import { isMobile } from "../../utils/constant";

const Identity = () => {
  const { classes } = useIdentityStyles();
  const flexDir = isMobile ? "column" : "row"

  return (
    <Box className={classes.container} display="flex" flexDirection={flexDir} id="identityPanel" >

      {ownerData.map((item) => (

        <Card variant="outlined" key={item.name}>
          <CardMedia
            className={classes.imageCard}
            component="img"
            image={acacia}
            alt={item.name}

          />
          <CardContent className={classes.card} >

            <Typography gutterBottom variant="h5" >
              {item.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" >
              {item.descriptions}
            </Typography>

          </CardContent>
        </Card>

      ))}

    </Box>
  );
};
export default Identity;
