import { Box, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@mui/material";
import { isMobile } from "../../utils/constant";

import useitemStyles from "./Item.module";
interface IImageListingProps {
    imagesListing: {
        label: string;
        description: string;
        services: any
        image: string
        imageDetail: string;
    }[]
}
export default function ItemListingWithImages(props: IImageListingProps) {
    const textWidth = isMobile ? "250px" : "350px"

    const videoHeight = isMobile ? "300px" : "90%"
    const videoWidth = isMobile ? "350px" : "450px"
    const gridOrder = isMobile ? "column" : "row"

    const { classes } = useitemStyles()
    return (
        <Box component="section" className={classes.detailsBedroom}>
            {props.imagesListing.map((item, i) => (
                <Grid container flexDirection={gridOrder} id="everyitem"
                    sx={{
                        backgroundColor: theme => theme.palette.secondary.main,
                        borderTop: "2.5px solid",
                        borderTopColor: theme => theme.palette.primary.main,
                        marginBottom: "2px"

                    }}
                >
                    <Grid item id="video" xs={7} alignItems={"center"}>
                        <video width={videoWidth} height={videoHeight}
                            autoPlay={true} loop={true} muted={true}
                            preload="none" playsInline
                        >
                            <source src="https://video.wixstatic.com/video/c7248a_2d6fa31080bd4745a1ed5db2d3a0a462/1080p/mp4/file.mp4"
                                type="video/mp4" />
                        </video>
                    </Grid>

                    <Grid item flexDirection="row" id="details" xs={isMobile ? "auto" : 5}
                        sx={{
                            // backgroundColor: theme => theme.palette.secondary.main,
                            // justifyContent: "center",
                            width: { textWidth },
                            alignContent: "start",
                            height: "fit-content"
                        }}>
                        <Typography variant="h3" margin="10px">{item.label}</Typography>
                        <Grid item id="itemdescription" height={"min-content%"}>
                            <Typography variant="subtitle2" overflow={"auto"} height="250px" >{item.description}</Typography>
                        </Grid>
                        <Grid item id="listicon" height="50%">
                            <List
                                sx={{
                                    // backgroundColor: theme => theme.palette.secondary.main,
                                    height: "fit-content%"
                                }}
                            >
                                <Typography variant="h4">Services</Typography>

                                {item.services.map((service: any) => (
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Icon>{service.icon}</Icon>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={service.description} />
                                    </ListItem>
                                ))}
                            </List>

                        </Grid>

                    </Grid>

                </Grid>

            ))
            }

        </Box >
    );
}
