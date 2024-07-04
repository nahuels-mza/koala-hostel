import { Box, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@mui/material";

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

    return (
        <Box component="section">
            {props.imagesListing.map((item) => (
                <Grid item display="flex" flexDirection="column" id="everyitem" >
                    <Grid container display="flex" flexDirection="column" id="services" xs={2} md={8} >
                        <Typography variant="h4">{item.label}</Typography>
                        <Grid item xs={16} textAlign="left" id="itemdescription">
                            <Typography variant="subtitle1">{item.description}</Typography>
                        </Grid>
                        <Grid item display="flex" flexDirection="row" id="listicon">
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

                        <Grid container display="flex" flexDirection="row" id="images" xs={2} md={8} height={"20%"}>
                            <Grid
                                item
                                justifyContent="center"
                                // rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                id="imagetext"

                            >
                                <img
                                    src={item.image}
                                    srcSet={`${item.image}`}
                                    alt={item.label}
                                    loading="lazy"
                                    width="50%"
                                    height="50%"

                                />
                                <img
                                    src={item.imageDetail}
                                    srcSet={`${item.imageDetail}`}
                                    alt={item.label}
                                    loading="lazy"
                                    width="50%"
                                    height="50%"
                                />

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            ))}

        </Box>
    );
}
