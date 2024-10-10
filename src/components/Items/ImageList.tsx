import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

interface IImageListingProps {
    images: {
        img: string;
        title: string;
        description: string;
    }[]
    column: number
    destination: string
}

export default function ImageListing(props: IImageListingProps) {


    const handleClickOpen = (item: any) => {
        window.location.href = props.destination
    };

    return (
        <>
            <ImageList cols={props.column} >
                {props.images.map((item) => (
                    <ImageListItem key={item.img} rows={2} style={{ cursor: "pointer" }}
                        onClick={() => handleClickOpen(item)}>
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
                ))}
            </ImageList>
        </>
    );
}
