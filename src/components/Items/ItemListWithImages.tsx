import { Box, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@mui/material";
import { isMobile } from "../../utils/constant";

import useitemListStyles from "./ItemList.module";
interface IImageListingProps {
    imagesListing: {
        label: string;
        description: string;
        services: any
        gif: string
    }[]
}
export default function ItemListingWithImages(props: IImageListingProps) {
    window.scrollTo(0, 0);
    const textWidth = isMobile ? "250px" : "100%"
    const gridOrder = isMobile ? "column" : "row"

    const { classes } = useitemListStyles()
    return (
        <Box component="section" className={classes.detailsBedroom}>
            {props.imagesListing.map((item, i) => (
                <Grid container flexDirection={gridOrder} id="everyitem" sx={{
                    borderColor: "#FEF8EC",
                    borderStyle: "solid",
                    borderWidth: "medium"
                }}
                >
                    <Grid item id="video" xs={isMobile ? 12 : 6} md={4} alignItems={"center"} padding={"5px"}>
                        <img src={item.gif} alt={item.description} />
                    </Grid>

                    <Grid item id="details" xs={isMobile ? "auto" : 6}
                        sx={{
                            width: { textWidth },
                            alignContent: "start",
                            height: "fit-content"
                        }}>
                        <Typography variant="h5" margin="10px">{item.label}</Typography>
                        <Grid item id="itemdescription" >
                            <Typography variant="subtitle1" overflow={"auto"}  >{item.description}</Typography>
                        </Grid>
                        <Grid item id="listicon">
                            <List>
                                <Typography variant="h5">Servicios</Typography>

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
            ))}
        </Box >
    );
}
