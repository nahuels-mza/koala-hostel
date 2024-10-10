import { makeStyles } from "tss-react/mui";

const useLocationStyles = makeStyles()((theme) => ({
  containerImage: {
    position: "relative",
    bottom: 0,
    // width: "100%",
    backgroundColor: "#e6e6e699",
    minHeight: "400px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justify: "center",
  },
  locationTitle: {
    border: "solid 1px #5757568f",
    backgroundColor: "#5757568f",
    padding: "10px",
    color: "white",
    width: "fit-content",
    margin: "auto !important",
    borderRadius: "30px",
  },
  icon: {
    fill: "#5757568f !important",
    cursor: "pointer",
    fontSize: "3rem !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem !important",
    },
  },
  container: {
    position: "relative",
    width: "100%",
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      height: "9rem !important",
    },
  },
  linkContainer: {
    [theme.breakpoints.down("sm")]: {
      "& h2": {
        fontSize: "2rem !important",
        fontWeight: 600,
        filter: "contrast",
      },
      "& h4": {
        fontSize: "1.5rem !important",
        fontWeight: 600,
        filter: "contrast",
      },
    },
  },
}));

export default useLocationStyles;
