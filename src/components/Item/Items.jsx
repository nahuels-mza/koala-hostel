import * as React from "react";
import PropTypes from "prop-types";
import { Box, Button, Paper } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import BedIcon from "@mui/icons-material/Bed";
import Carousel from "react-material-ui-carousel";

import ItemDialog from "./Dialog";
import { BedWithService } from "../../utils/constant";

ItemDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function ItemDialogDemo() {
  const imageHeight = window.screen.height * 0.4;
  const imageWidth = window.screen.width * 0.1;

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
      {open && <ItemDialog open={open} onClose={handleClose} room={room} />}
      <Box
        component="section"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        // height="200px"

        marginTop={3}
        sx={{ backgroundColor: "#dcecef99", borderRadius: 3 }}
      >
        return (
        <Carousel
          height={imageHeight}
          animation="slide"
          indicators="false"
          backgroundColor="transparent"
          indicatorIconButtonProps={{
            style: {
              width: `${imageWidth}px`,
              objectFit: "contain",
            },
          }}
        >
          {BedWithService.map((item, i) => (
            <Paper key={item}>
              <ImageListItem key={item.img}>
                <img
                  key={i}
                  src={`${item.image}`}
                  srcSet={`${item.image}`}
                  alt={item.label}
                  loading="lazy"
                  height={imageHeight / 2}
                />
                <Button
                  sx={{
                    border: "1.5px solid",
                    title: "item.label",
                  }}
                  variant="outlined "
                  onClick={() => handleClickOpen(item)}
                  size="medium"
                  startIcon={<BedIcon />}
                  title="details"
                >
                  {item.label}
                </Button>
              </ImageListItem>
            </Paper>
          ))}
        </Carousel>
        );
      </Box>
    </>
  );
}
