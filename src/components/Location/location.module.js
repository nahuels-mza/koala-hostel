import { makeStyles } from "tss-react/mui";
import { isMobile } from "../../utils/constant";
const heightImage = isMobile ? "80%" : "400px"

const useLocationStyles = makeStyles()((theme) => ({
  containerImage: {
    width: "-webkit-fill-available",
    height: heightImage,
    objectFit: "none",
    [theme.breakpoints.down("sm")]: {
      objectFit: "initial",
      objectPosition: "top",
      zoom: "50%"
    }
  },
  locationTitle: {
    border: "solid 1px #5757568f",
    backgroundColor: "#5757568f",
    color: "white",
    width: "fit-content",
    margin: "auto !important",
    borderRadius: "30px",
  },

  container: {
    position: "relative",
    width: "80%",
    height: "80%",
    [theme.breakpoints.down("sm")]: {
      height: "9rem !important",
    },
    justifyItems:"center"
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
