import React from "react";
import { useLocation } from 'react-router-dom';
import { Box } from "@mui/material";
import Title from "../../components/Title/MainTitle";
import ItemListingWithImages from "../../components/Items/ItemListWithImages";
import { bedWithService } from "../../utils/habitacionesConstants";
import CommingSoonPage from "../Soon/CommingSoon";
import BookDateRange from "../../components/Date/Date";
import useStylesHostelPage from "../Hostel/MainHostel.module";

export default function BedroomPage() {
    const { classes } = useStylesHostelPage();
    const location = useLocation();
    const type = location.state.name
    const bedType = bedWithService.filter(a => a.type === type)

    React.useEffect(() => {
        const header = document.querySelector("#pageHeader");
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 76) {
                header?.classList.add(classes.isSticky);
                header?.classList.remove(classes.pageHeader);
            } else {
                header?.classList.remove(classes.isSticky);
                header?.classList.add(classes.pageHeader);
            }
        });
    },);

    if (bedType.length === 0) {
        return (
            <Box component="section">
                <CommingSoonPage />
            </Box>
        )
    }
    return (
        <Box  >
            <Box id="pageHeader">
                <BookDateRange />
            </Box>
            <Box sx={{
                backgroundColor: theme => theme.palette.secondary.main,
                borderTop: "solid",
                borderTopColor: "#145357"
            }}>
                <Title title={"Nuestras Habitaciones"} subtitle={"Mayor Comodidad"} />
            </Box>
            <Box sx={{
                textAlign: "-webkit-center",
                backgroundColor: theme => theme.palette.secondary.main,
            }}>
                <ItemListingWithImages imagesListing={bedType} />
            </Box>
        </Box>
    );
}
