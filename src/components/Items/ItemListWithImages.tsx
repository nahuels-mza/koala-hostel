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
    const gridOrder = isMobile ? "column-reverse" : "row"

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
                    <Grid item id="video" xs={isMobile ? 12 : 6} alignItems={"center"} >
                        <video autoPlay controls muted loop playsInline preload="none" width={"80%"}>
                            <source src={item.gif} type="video/mp4" />
                        </video>
                    </Grid>

                    <Grid item id="details" xs={isMobile ? "auto" : 6}
                        sx={{
                            width: { textWidth },
                            alignContent: "start",
                            height: "fit-content"
                        }}>
                        <Typography variant="h4" margin="10px">{item.label}</Typography>
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
                        <Grid item id="policy">
                            <Typography variant="subtitle2" overflow={"auto"} textAlign={"left"} >
                                Hostel Plaza Policy and Conditions:
                                <br></br>
                                <br></br>
                                Rates for Foreign Guests: All rates listed are tax-exempt for foreign guests who present a valid passport and immigration stamp at check-in. Payment can be made in US dollars or Argentine pesos via cash, card, or bank transfer.
                                Rates for Domestic Guests: Argentine nationals are subject to a 21% VAT (Value Added Tax) which will be added to the listed rates.
                                <br></br>
                                Booking and Cancellation Policies
                                <br></br>
                                A valid credit card or deposit is required to confirm your reservation.
                                Cancellations made at least 48 hours prior to check-in will not incur charges. Cancellations within 48 hours or no-shows will result in a charge equal to the first night’s stay.
                                <br></br>
                                Check-in and Check-out:
                                <br></br>
                                Check-in: From 12:00 PM.
                                Check-out: By 10:00 AM.
                                Late check-outs may incur additional charges.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Box >
    );
}
