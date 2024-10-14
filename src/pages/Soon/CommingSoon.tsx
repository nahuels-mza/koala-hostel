
import { Box, Button } from "@mui/material";
import background from "../../assets/backgroud.png"
import useStylesCommingSoon from "./CommingSoon.module";

export default function CommingSoonPage() {
    const { classes } = useStylesCommingSoon()
    return (

        <Box component="section"
            className={classes.containerSoon}
            sx={{
                textAlign: "-webkit-center",
            }}>
            <img
                src={background}
                srcSet={background}
                alt={"Soon"}
                className={classes.imageSoon}
            >

            </img>
            <Button
                href="/hostel"
                sx={{ borderBottom: "solid" }}
            >
            </Button>
        </Box >
    )
}