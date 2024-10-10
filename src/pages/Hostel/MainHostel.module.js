import { makeStyles } from "tss-react/mui";

const useStylesHostelPage = makeStyles()((theme) => ({
  container: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
  imageContainer: {
    maxHeight: "min-content",
    // margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
    // maxWidth: "inherit"
  },
  parallax: {
    minHeight: "100vh",
  },

  pageHeader: {
    position: "relative",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    border:0
  },
  isSticky: {
    position: "fixed" ,
    boxShadow: "0 5px 16px rgba(0, 0, 0, 0.1)",
    right: 0,
    left: 0,
    top: 0,
    zIndex: 1000,
  },
}));

export default useStylesHostelPage;
