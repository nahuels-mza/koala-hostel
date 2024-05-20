import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import ItemDialog from "./Dialog";

interface IImageListingProps {
    images: {
        img: string;
        title: string;
        description: string;
    }[]
    column: number
}

export default function ImageListing(props: IImageListingProps) {
    const [open, setOpen] = React.useState(false);
    const [item, setItem] = React.useState();

    const handleClickOpen = (item: any) => {
        setOpen(true);
        setItem(item);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            {open && <ItemDialog open={open} onClose={handleClose} item={item} />}

            <ImageList cols={props.column} sx={{ width: "100%", height: "70%" }}>
                {props.images.map((item) => (
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
