import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: theme => theme.palette.secondary.main }} >
            <Container >

                <Box textAlign={'center'} >
                    <Typography variant="h5" fontSize="x-small" >
                        Copyright © 2025 TODOS LOS DERECHOS RESERVADOS.
                    </Typography>
                    <Typography variant="h6" fontSize="xx-small">
                        WEB REALIZADA POR HOSTEL PLAZA
                    </Typography>

                </Box>


            </Container >
        </Box >
    );
}