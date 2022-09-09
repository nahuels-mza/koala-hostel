import React from "react";
import useConfirmationStyles from "./Confirmation.module";
import { Box, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Fab from '@mui/material/Fab';

const Confirmation = () => {
  const { classes } = useConfirmationStyles();
  // TODO ADD FORMAT HERE
  const whatsMessage = "Hola Koala Hostel mi nombre es";

  // FROM https://mailto.vercel.app/
  const emailMessage = `mailto:matias_daszkal@hotmail.com?subject=${encodeURIComponent(
    "Consulta Reserva"
  )}&body= ${whatsMessage} `;

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}
    alignSelf='flex-end'
    position= 'fixed'
    bottom= "0"
    flexDirection= "column"
    flex="1"
    >
      <Fab variant="extended">
      <Button
        sx={{ height: 40 }}
        href={`https://wa.me/5492612599997?text=${whatsMessage}`}
        marginLeft={2}
      >
        <WhatsAppIcon className={classes.icon} fontSize="large" />
      </Button>
      </Fab>
      <Fab variant="extended">
      <Button href={emailMessage} marginLeft={2}>
        <EmailIcon className={classes.icon} fontSize="large" />
      </Button>
      </Fab>
    </Box>
  );
};

export default Confirmation;
