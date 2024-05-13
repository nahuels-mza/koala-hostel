import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
    const whatsMessage = "Hola Acacias Hostel mi Nombre es";
    return (
        <Box component="footer" sx={{ color: 'inherit' }} >
            <Container  >

                <Box textAlign={'center'}>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                        Follow Us
                    </Typography>
                    <Link href="https://www.facebook.com/" >
                        <Facebook />
                    </Link>
                    <Link
                        href="https://www.instagram.com/"

                        sx={{ pl: 1, pr: 1 }}
                    >
                        <Instagram />
                    </Link>
                    <Link href="https://www.twitter.com/" >
                        <Twitter />
                    </Link>
                    <Link href={`https://wa.me/5492616089132?text=${whatsMessage}`} >
                        <WhatsApp />
                    </Link>
                </Box>


            </Container >
        </Box >
    );
}