import { Box, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@mui/material";
import { isMobile } from "../../utils/constant";
import { locale } from "../../utils/locale";

import useitemListStyles from "./ItemList.module";
import Message from "../../components/Message/Message";
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
    // const type = props.imagesListing[0].type

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

                        <Grid item id="listicon">
                            <List>
                                <Typography variant="h5">{locale("habServicios")}</Typography>

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
                            <Typography variant="subtitle1" overflow={"auto"} textAlign={"left"} >
                                {locale("bedroomsPolicy")}
                            </Typography>
                            <Typography variant="subtitle2" overflow={"auto"} textAlign={"left"} >
                                <br></br>
                                {locale("bedroomsRateTitleUs")}
                                <br></br>
                                {locale("bedroomsRateDescUs")}
                                <br></br>
                                {locale("bedroomsRateTitleArs")}
                                <br></br>
                                {locale("bedroomsRateDescArs")}
                                <br></br>
                                <br></br>
                                {locale("bedroomsCancelationTitle")}
                                <br></br>
                                {locale("bedroomsCancelationDesc")}
                                <br></br>
                                <br></br>
                                Check-in and Check-out:
                                <br></br>
                                Check-in: From 12:00 PM. --- Check-out: By 10:00 AM.
                                <br></br>
                                {locale("bedroomsLateCheckOut")}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
            <Message instagram={false} whatsMessage="I'd like to Book a Room" />
        </Box >
    );
}
