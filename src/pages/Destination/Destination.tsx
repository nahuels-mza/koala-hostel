import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { agenciaImages } from "../../utils/constant";
import useStylesDestinationPage from "./Destination.module"

export default function DestinationPage() {
    const { id } = useParams();
    const { classes } = useStylesDestinationPage()
    const dataDestination = agenciaImages.find(
        (agencia) => id?.toString() === agencia.id.toString(),
    );


    if (!dataDestination) {
        return <div>Loading ...</div>;
    }

    return (
        <Box className={classes.container}>
            <Box className={classes.textOverlay} id="description" >
                <Typography variant="h3" gutterBottom>
                    {dataDestination.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {dataDestination.description}
                </Typography>
            </Box>
            <video className={classes.containerVideo}
                autoPlay={true} loop={true} muted={true}
                id="video">
                <source src={dataDestination.videoUrl} />
            </video>
        </Box>
    );
}
