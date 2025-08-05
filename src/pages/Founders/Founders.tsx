import { Box, Grid, Typography } from "@mui/material";
import { isMobile } from "../../utils/constant";
import founders from "../../assets/founders.jpeg"
import CommentCarouselMobile from "../../components/Carousel/CommentCarousel";
import CommentCarouselWeb from "../../components/Carousel/CommentCarouselWeb";
import { locale } from "../../utils/locale";

export default function FoundersPage() {

    return (
        <Box sx={{ backgroundColor: theme => theme.palette.secondary.main, }}>
            <Typography variant="h3" textAlign="center" padding="4px">
                Discover the Magic of a Historic House
            </Typography>
            <Box component="section" sx={{ justifyItems: "center", backgroundColor: "white" }} id="grilla">

                <Grid container sx={{
                    borderColor: "#FEF8EC",
                    borderStyle: "solid",
                    borderWidth: "medium",
                    // minHeight: { heightImage },
                    // backgroundColor: "white",
                    // justifyItems: "center",
                    // alignItems: "center",
                    width: isMobile ? "100%" : "80%",
                }} id="container">
                    <Grid item xs={isMobile ? 12 : 6} id="texto" sx={{ justifyItems: "center", p: 4 }}>
                        <Typography variant={isMobile ? "subtitle1" : "h5"} align="center">
                            Our hostel began as an exciting project: to breathe new life into a beautiful heritage house in the heart of Mendoza.
                            <br />
                            {!isMobile && <br />}
                            Every corner has a story to tell, and we’re constantly transforming this space to make it even more special.
                            {!isMobile && "We invite all our guests to be part of this journey, experiencing the ongoing improvements to the house and leaving their own mark."}
                            <br />
                            {!isMobile && <br />}
                            Behind this project are us: three friends passionate about tourism, travel, and sharing our culture. With years of experience in hostels, hospitality, and adventures around the world, we’ve created this space to offer you much more than just a place to sleep.
                            <br />
                            {!isMobile && <br />}
                            Enjoy a vibrant social atmosphere, daily events full of food, drinks, and laughter, and the best tips to explore Mendoza like a local.
                            <br />
                            {!isMobile && <br />}
                            {!isMobile && "This is not just a hostel; it’s a home where connections, stories, and experiences come together to make your journey unforgettable."}
                            <br />
                            Come and live the transformation with us!
                        </Typography>
                    </Grid>


                    <Grid item xs={isMobile ? 12 : 6} md={3}>
                        <Box
                            component="img"
                            src={founders}
                            alt="Placeholder"
                            sx={{ width: '100%', borderRadius: 2, objectFit: "cover" }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Typography variant="h3" textAlign="center" padding="4px" sx={{ justifyItems: "center", backgroundColor: theme => theme.palette.secondary.main }}>
                {locale("founderCarousel")}
            </Typography>
            {isMobile ? <CommentCarouselMobile /> : <CommentCarouselWeb />}

        </Box>
    )
}