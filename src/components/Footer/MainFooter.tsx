import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import { Box } from "@mui/material";

export default function Footer() {
    const whatsMessage = "Hola Hostel Plaza mi Nombre es";
    return (
        <Box component="footer" sx={{ backgroundColor: 'primary' }} >
            <Container >

                <Box textAlign={'center'} >
                    <Typography variant="h5" gutterBottom>
                        Follow Us
                    </Typography>
                    <Box textAlign={'center'} sx={{ pl: 5, pr: 5, padding: 2, fontSize: "0.5rem" }}>
                        <Link href="https://www.facebook.com/" color={"#1565c0"}>
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/" color={"#C13584 "}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color={"#000000de"}>
                            <XIcon />
                        </Link>
                        <Link href={`https://wa.me/5492615372767?text=${whatsMessage}`} color={"#128C7E"} >
                            <WhatsApp />
                        </Link>
                    </Box>
                </Box>


            </Container >
        </Box >
    );
}