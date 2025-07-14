import { makeStyles } from "tss-react/mui";

const useCarouselStyles = makeStyles()((theme) => ({
  carouselConteiner: {
    height:  "400px",
    objectFit:  "cover",
    objectPosition: "center",
    flexGrow: "0",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "40vh",
      objectFit: "scale-down",
      width: "-webkit-fill-available",
    }

  },
  image: {
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
}));

export default useCarouselStyles;
