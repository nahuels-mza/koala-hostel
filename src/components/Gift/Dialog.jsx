import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Dialog,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import useGiftStyles from "./Gift.module";

const GiftDialog = (props) => {
  const { classes } = useGiftStyles();
  const { onClose, open, room } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0, margin: "20px 12px" }}>
        <BedIcon />

        <ListItem key={room.description}>
          <ListItemText
            primary={
              <Typography
                style={{ color: "black" }}
                className={classes.accountText}
              >
                {`${room.description}:`}
              </Typography>
            }
            secondary={`${room.services}`}
          />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default GiftDialog;
