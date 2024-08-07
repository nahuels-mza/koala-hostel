import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { ownerData } from "../../utils/constant";
import useIdentityStyles from "./Identity.module";
import acacia from "../../assets/acacia.png";

const Identity = () => {
  const { classes } = useIdentityStyles();
  return (
    <Box>
      <Typography variant="h3" textAlign="center">
        Quienes somos
      </Typography>
      <Box id="ourselves" component="section" className={classes.container}>
        {ownerData.map((item) => (
          <Card variant="outlined" className={classes.card}>
            <CardMedia
              component="img"
              image={acacia}
              alt={item.name}
            />
            <CardContent className={classes.card}>

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
    </Box>
  );
};
export default Identity;
