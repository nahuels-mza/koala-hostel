import { makeStyles } from "tss-react/mui";

const useStylesDestinationPage = makeStyles()((theme) => ({
  container: {
    // position: "relative",
    textAlign:"center",
    border: "2px"
  },
  containerVideo: {
    position: "relative",
    zIndex: 0,
    width: "80%",
    height: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: "-webkit-fill-available",
      padding: 0,
      objectFit: "cover",
      // objectPosition:"-250px"
    },
    padding: "40px",
    objectFit: "contain",

  },
  textOverlay: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "white",
    top: "50%",
    left: "10%",
    right: "10%",
    lineHeight: 2.5,
    fontSize: "2.5rem",
    transform: "translate(0%, -50%)",
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.5,
      fontSize: "1rem",
      width: "100% !important",
      maxWidth: "intrinsic",
      height: "40%"
    },
    height: "400px",
    overflow: "auto",
    objectFit: "contain",
    opacity: 0.6
  },
}));

export default useStylesDestinationPage