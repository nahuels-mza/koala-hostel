import { makeStyles } from "tss-react/mui";

const useitemStyles = makeStyles()((theme) => ({
  gifIcon: {
    fontSize: "2rem !important",
    margin: "0 12px",

    [theme.breakpoints.down("sm")]: {
      margin: "0 8px",
    },
  },
  dialogTitle: {
    marginRight: "12px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px",
    },
    fontFamily: "Times",
    fontSize: "1.5rem",
  },
  dialogText: {
    marginRight: "12px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "5px",
    },
  },
  displayNone: {
    zIndex: "-10",
    position: "relative",
    left: "-30%",
    top: "10px",
    whiteSpace: "nowrap",
    width: "-webkit-fill-available",
  },
  detailsBedroom:{
    width: "75%",
    flexGrow: 1,
    height: "90%"
  },
  imageListing:{
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
        height: "85%"
    },
    cursor: "pointer"
  },
}));

export default useitemStyles;
