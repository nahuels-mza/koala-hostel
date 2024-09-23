import { Box } from "@mui/material";
import Identity from "../../components/Identity/Identity";
import Title from "../../components/Title/MainTitle";

export default function FoundersPage() {
    return (
        <Box component="section" >
            <Title title={"Quienes somos"} subtitle={"Unos amigos que estaban aburridos"} />
            <Identity />
        </Box>
    )
}