import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
  imageContainer: {
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
    padding: 2
  },
  parallax: {
    minHeight: "100vh",
    // filter: "grayscale(80%)",
    backgroundAttachment: "fixed",
    backgroundPosition: "0% 25%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "30%",
    },
  },
}));

export default useStyles;
