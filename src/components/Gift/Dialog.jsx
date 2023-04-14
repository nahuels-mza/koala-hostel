import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Dialog,
} from "@mui/material";
import Divider from "@mui/material/Divider";
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
          />
        </ListItem>
        <Divider />
        <List>
          <ListItem key={room.description}>
            <ListItemText
              secondary={
                <Typography style={{ color: "black" }} variant='overline'>
                  {room.services.map((s) => {
                    return "\n"+s;
                  })}

                </Typography>
              }
            />
          </ListItem>
        </List>
      </List>
    </Dialog>
  );
};

export default GiftDialog;
