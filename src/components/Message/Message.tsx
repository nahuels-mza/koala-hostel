import React from "react";
import { Box, Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Instagram from "@mui/icons-material/Instagram";

import useMessageStyles from "./Message.module";

interface IMessages {
  instagram: boolean
  whatsMessage: string
}
const Message = (props: IMessages) => {
  const { classes } = useMessageStyles();
  // TODO ADD FORMAT HERE
  const whatsMessage = props.whatsMessage ? props.whatsMessage : "Hola Hostel Plaza mi nombre es";
  const displayProp = props.instagram ? 'in-line' : 'none'
  return (
    <Box
      position="fixed"
      bottom="0"
      zIndex="100"
      right="0"
    >

      <Fab id="whats" sx={{ display: displayProp, backgroundColor: "#08491ef0" }}>
        <Button
          href={`https://wa.me/5492615372767?text=${whatsMessage}`}
        >
          <WhatsAppIcon className={classes.iconWasp} />
        </Button>
      </Fab>


      <Fab id="insta" sx={{ display: displayProp, backgroundColor: "#e8d0d6b8" }}>
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
