import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Dialog,
  Button,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import useItemStyles from "./Item.module";

interface IItemDialogProps {
  onClose: any;
  open: any;
  item: any
}

const ItemDialog = (props: IItemDialogProps) => {
  const { classes } = useItemStyles();
  const { onClose, open, item } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0, margin: "20px 12px" }}>


        <ListItem key={item.title}>
          <ListItemText
            primary={
              <Typography
                style={{ color: "black" }}
                className={classes.dialogTitle}
              >
                {`${item.title}:`}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem key={item.description}>
          <ListItemText
            primary={
              <Typography
                style={{ color: "black" }}
                className={classes.dialogText}
              >
                {`${item.description}:`}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <Button href="/bedrooms" variant="contained" color="primary" size="large" disableElevation>
          See More Details
        </Button>
      </List>
    </Dialog>
  );
};

export default ItemDialog;
