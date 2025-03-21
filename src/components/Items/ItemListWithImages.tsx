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
                <Grid container flexDirection={gridOrder} id="everyitem"
                    sx={{
                        backgroundColor: theme => theme.palette.secondary.main,
                        borderTop: "2.5px solid",
                        borderTopColor: theme => theme.palette.primary.main,
                        marginBottom: "2px"

                    }}
                >
                    <Grid item id="video" xs={6} alignItems={"center"} padding={"5px"}>
                        <img src={item.gif} alt={item.description} width={"80%"} height={"70%"} />
                    </Grid>

                    <Grid item id="details" xs={isMobile ? "auto" : 5}
                        sx={{
                            width: { textWidth },
                            alignContent: "start",
                            height: "fit-content"
                        }}>
                        <Typography variant="h3" margin="10px">{item.label}</Typography>
                        <Grid item id="itemdescription" >
                            <Typography variant="subtitle2" overflow={"auto"}  >{item.description}</Typography>
                        </Grid>
                        <Grid item id="listicon" >
                            <List>
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
