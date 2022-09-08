import * as React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";

import GiftDialog from "./Dialog";
import { BedWithService } from "../../utils/constant";

GiftDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function GiftDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [room, setRoom] = React.useState();

  const handleClickOpen = (item) => {
    setOpen(true);
    setRoom(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && <GiftDialog open={open} onClose={handleClose} room={room} />}
      <Box
        // component="section"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="200px"
        marginTop={3}
        sx={{ backgroundColor: "#dcecef99" }}
      >
        <Box
        display= "flex"
        flexDirection= "column">
        <Typography sx={{ fontWeight: 1200 }}><p>Nuestras Habitaciones</p></Typography>
        </Box>
        {BedWithService.map((item) => {
          return (
            <Box>
            <Button
              sx={{
                border: "3px solid rgba(25, 118, 210, 0.5)",
                "&:hover": { border: "3px solid rgba(25, 118, 210, 0.5)" },
              }}
              variant="outlined"
              onClick={() => handleClickOpen(item)}
            >
              <Typography sx={{ fontWeight: 300 }}>{item.label}</Typography>
            </Button>
            </Box>
          );
        })}


      </Box>
    </>
  );
}
