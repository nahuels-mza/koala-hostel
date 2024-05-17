import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { hostelImages } from '../../utils/constant';
import PropTypes from "prop-types";
import ItemDialog from "./Dialog";

ItemDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default function TitlebarBelowImageList() {
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

            <ImageList cols={3} sx={{ width: "100%", height: "70%" }}>
                {hostelImages.map((item) => (
                    <ImageListItem key={item.img} rows={2} style={{ cursor: "pointer" }}
                        onClick={() => handleClickOpen(item)}>

                        <img
                            srcSet={item.img}
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            height="50px"

                        />
                        <ImageListItemBar
                            key={item.img}
                            title={item.title}

                        />

                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}
