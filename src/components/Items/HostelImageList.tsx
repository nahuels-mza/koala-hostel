import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

interface IHostelImageListingProps {
    images: {
        img: string;
        title: string;
        description: string;
    }[]
    column: number
    destination: string
}

// TODO: This a copy of ImageList.tsx but is not used to send param on the url
// So we need to find a better implementation rather 2  99% identical files
export default function HostelImageListing(props: IHostelImageListingProps) {

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
