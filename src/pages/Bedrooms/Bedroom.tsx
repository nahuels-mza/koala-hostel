import { Box } from "@mui/material";
import Title from "../../components/Title/MainTitle";
import ItemListingWithImages from "../../components/Items/ItemListWithImages";
import { bedWithService } from "../../utils/habitacionesConstants";
import { useLocation } from 'react-router-dom';

export default function BedroomPage() {
    const location = useLocation();
    const type = location.state.name

    const bedType = bedWithService.filter(a => a.type === type)
    console.log(bedType)

    return (
        <Box component="section">
            <Title title={"Nuestras Habitaciones"} subtitle={"Mayor Comodidad"} />
            <Box sx={{ textAlign: "-webkit-center" }}>
                <ItemListingWithImages imagesListing={bedType} />
            </Box>

        </Box>
    );
}
