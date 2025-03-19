import { Box } from "@mui/material";
import Title from "../../components/Title/MainTitle";
import ItemListingWithImages from "../../components/Items/ItemListWithImages";
import { bedWithService } from "../../utils/habitacionesConstants";
import { useLocation } from 'react-router-dom';
import CommingSoonPage from "../Soon/CommingSoon";

export default function BedroomPage() {
    const location = useLocation();
    const type = location.state.name

    const bedType = bedWithService.filter(a => a.type === type)
    console.log(bedType)

    if (bedType.length === 0) {
        return (
            <Box component="section">
                <CommingSoonPage />
            </Box>
        )
    }
    return (
        <Box component="section">
            <Title title={"Nuestras Habitaciones"} subtitle={"Mayor Comodidad"} />
            <Box sx={{ textAlign: "-webkit-center" }}>
                <ItemListingWithImages imagesListing={bedType} />
            </Box>

        </Box>
    );
}
