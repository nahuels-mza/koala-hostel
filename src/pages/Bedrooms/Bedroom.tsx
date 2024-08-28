import { Box, Grid } from "@mui/material";
import Title from "../../components/Title/MainTitle";
import ItemListingWithImages from "../../components/Items/ItemListWithImages";
import { bedWithService } from "../../utils/constant";
export default function BedroomPage() {

    return (
        <Box component="section">
            <Title title={"Nuestras Habitaciones"} subtitle={"Mayor Comodidad"} />
            {/* <Grid
                id="pageparent"
                container
                spacing={3}
                sx={{
                    margin: "auto",
                    flexGrow: 1,
                }}
            > */}
            <ItemListingWithImages imagesListing={bedWithService} />
            {/* </Grid> */}
        </Box>
    );
}
