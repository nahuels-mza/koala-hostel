import { makeStyles } from "tss-react/mui";

const useCarouselStyles = makeStyles()((theme) => ({
  imageContainer: {},
  image: {
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
}));

export default useCarouselStyles;
