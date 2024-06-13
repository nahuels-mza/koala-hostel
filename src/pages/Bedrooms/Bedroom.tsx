import { Box, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@mui/material";
import { bedWithService } from "../../utils/constant";

export default function BedroomPage() {
    const data = bedWithService;
    return (
        <Box component="section">
            <Typography variant="h2" align="center">
                Nuestras Habitaciones
            </Typography>
            <Grid
                id="pageparent"
                container
                spacing={3}
                sx={{
                    margin: "auto",
                    flexGrow: 1,
                }}

            >
                {data.map((item) => (
                    <Grid item display="flex" flexDirection="column" id="everyitem"
                    >
                        <Grid item justifyContent="center" id="services" xs={4} >
                            <Typography variant="h4">{item.label}</Typography>
                            <List
                                sx={{
                                    width: "100%",
                                    maxWidth: 360,
                                    bgcolor: "background.paper",
                                }}
                            >
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
                        <Grid item display="flex" flexDirection="column" id="images" xs={2} md={8} height={"20%"}>
                            <Grid
                                item
                                justifyContent="center"
                                rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
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
                                <Grid item justifyContent="center">
                                    <Typography variant="subtitle1">{item.description}</Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
