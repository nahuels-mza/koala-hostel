import React from "react";
import useMessageStyles from "./Message.module";
import { Box, Button } from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Instagram from "@mui/icons-material/Instagram";

import Fab from "@mui/material/Fab";

const Message = () => {
  const { classes } = useMessageStyles();
  // TODO ADD FORMAT HERE
  const whatsMessage = "Hola Koala Hostel mi Nombre es";

  return (
    <Box
      position="fixed"
      bottom="0"
      zIndex="100"
      right="0"
    >
      <Fab>
        <Button
          href={`https://wa.me/5492616089132?text=${whatsMessage}`}
        >
          <WhatsAppIcon className={classes.iconWasp} />
        </Button>
      </Fab>
      <Fab>
        <Button
          href="https://www.instagram.com/hostel.plaza"
        >
          <Instagram className={classes.iconInsta} />
        </Button>
      </Fab>
    </Box>
  );
};

export default Message;
