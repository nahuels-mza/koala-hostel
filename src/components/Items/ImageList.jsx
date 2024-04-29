import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { hostelImages } from '../../utils/constant';
import { Button } from '@mui/material';
import PropTypes from "prop-types";
import ItemDialog from "./Dialog";

ItemDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function TitlebarBelowImageList() {
    const imageHeight = window.screen.height * 0.75;
    const imageWidth = window.screen.width * 0.75;
    const [open, setOpen] = React.useState(false);
    const [item, setItem] = React.useState();

    const handleClickOpen = (item) => {
        setOpen(true);
        setItem(item);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            {open && <ItemDialog open={open} onClose={handleClose} item={item} />}

            <ImageList sx={{ width: imageWidth, height: imageHeight }}>
                {hostelImages.map((item) => (
                    <Button
                        variant="outlined "
                        onClick={() => handleClickOpen(item)}

                        sx={{

                        }}
                    >
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={item.img}
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                key={item.img}
                                title={item.title}
                            />
                        </ImageListItem>
                    </Button>
                ))}
            </ImageList>
        </>
    );
}
