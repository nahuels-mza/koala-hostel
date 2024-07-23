import { makeStyles } from "tss-react/mui";

const useStylesHostelPage = makeStyles()((theme) => ({
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
    padding: 2,
  },
  parallax: {
    minHeight: "100vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "0% 25%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "30%",
    },
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
