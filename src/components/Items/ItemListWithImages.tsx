import { Box, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@mui/material";
import { isMobile } from "../../utils/constant";

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
    const imageSize = isMobile() ? "180px" : "450px"
    const imagePosition = isMobile() ? 'center' : 'left'

    return (
        <Box component="section" >
            {props.imagesListing.map((item) => (
                <Grid item display="flex" flexDirection="column" id="everyitem" marginBottom={"80px"}>
                    <Grid container display="flex" flexDirection="column" id="services" xs={"auto"} >
                        <Typography variant="h4">{item.label}</Typography>
                        <Grid item xs={16} textAlign="left" id="itemdescription">
                            <Typography variant="subtitle2">{item.description}</Typography>
                        </Grid>
                        <Grid container display="flex" flexDirection="column" id="details">
                            <Grid item id="listicon">
                                <List
                                    sx={{
                                        width: "100%",
                                        maxWidth: 360,
                                        bgcolor: "background.paper",
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
                            <Grid sx={{ flexGrow: 1, justifyContent: imagePosition, marginLeft: "4px" }} m={2} container id="images">
                                <Box
                                    component="img"
                                    src={item.image}
                                    srcSet={item.image}
                                    alt={item.label}
                                    loading="lazy"
                                    width={imageSize}
                                    height={imageSize}


                                />
                                <Box
                                    component="img"
                                    src={item.imageDetail}
                                    srcSet={`${item.imageDetail}`}
                                    alt={item.label}
                                    loading="lazy"
                                    sx={{
                                        marginLeft: 2
                                    }}
                                    width={imageSize}
                                    height={imageSize}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            ))
            }

        </Box >
    );
}
