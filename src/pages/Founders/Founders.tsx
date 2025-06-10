import { Box, Grid, Typography } from "@mui/material";
import Title from "../../components/Title/MainTitle";
import { isMobile } from "../../utils/constant";
import founders from "../../assets/founders.jpeg"
import CommentCarousel from "../../components/Carousel/CommentCarousel";

export default function FoundersPage() {
    const heightImage = isMobile ? "80%" : "400px"
    // const { classes } = useStylesHostelPage();
    return (
        <Box component="section" sx={{ backgroundColor: theme => theme.palette.secondary.main, }}>
            <Title title={"Discover the Magic of a Historic House"} subtitle="" />
            <Grid container sx={{ minHeight: '100vh', backgroundColor: "white" }}>
                {/* Left: Text */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
                    <Typography variant="h5" component="div" align="center">

                        Our hostel began as an exciting project: to breathe new life into a beautiful heritage house in the heart of Mendoza. Every corner has a story to tell, and we’re constantly transforming this space to make it even more special. We invite all our guests to be part of this journey, experiencing the ongoing improvements to the house and leaving their own mark.
                        <br />
                        <br />
                        Behind this project are us: three friends passionate about tourism, travel, and sharing our culture. With years of experience in hostels, hospitality, and adventures around the world, we’ve created this space to offer you much more than just a place to sleep. Enjoy a vibrant social atmosphere, daily events full of food, drinks, and laughter, and the best tips to explore Mendoza like a local.
                        <br />
                        <br />
                        This is not just a hostel; it’s a home where connections, stories, and experiences come together to make your journey unforgettable. Come and live the transformation with us!
                    </Typography>
                </Grid>

                {/* Right: Image */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
                    <Box
                        component="img"
                        src={founders}
                        alt="Placeholder"
                        sx={{ maxWidth: '100%', height: 'auto', borderRadius: 2 }}
                    />
                </Grid>
            </Grid>
            <CommentCarousel height={heightImage} width={heightImage} />
        </Box>
    )
}