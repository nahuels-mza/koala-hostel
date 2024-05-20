import React from "react";
import useMessageStyles from "./Message.module";
import { Box, Button } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Fab from "@mui/material/Fab";

const Message = () => {
  const { classes } = useMessageStyles();
  // TODO ADD FORMAT HERE
  const whatsMessage = "Hola Koala Hostel mi Nombre es";

  // FROM https://mailto.vercel.app/
  // const emailMessage = `mailto:matias_daszkal@hotmail.com?subject=${encodeURIComponent(
  //   "Consulta Reserva"
  // )}&body= ${whatsMessage} `;

  return (
    <Box
      sx={{ "& > :not(style)": { m: 1 } }}

      position="fixed"
      bottom="0"
      zIndex="100"
      right="0"
    >
      <Fab>
        <Button
          sx={{ height: 40 }}
          href={`https://wa.me/5492616089132?text=${whatsMessage}`}
        >
          <WhatsAppIcon className={classes.icon} fontSize="large" />
        </Button>
      </Fab>
      {/* <Fab>
        <Button href={emailMessage}>
          <EmailIcon className={classes.icon} fontSize="large" />
        </Button>
      </Fab> */}
    </Box>
  );
};

export default Message;
