import { Box } from "@mui/material";
import Title from "../../components/Title/MainTitle";
import ItemListingWithImages from "../../components/Items/ItemListWithImages";
import { bedWithService } from "../../utils/constant";
export default function BedroomPage() {

    return (
        <Box component="section">
            <Title title={"Nuestras Habitaciones"} subtitle={"Mayor Comodidad"} />
            <Box pl={"20px"} pr={"20px"}>
                <ItemListingWithImages imagesListing={bedWithService} />
            </Box>

        </Box>
    );
}
