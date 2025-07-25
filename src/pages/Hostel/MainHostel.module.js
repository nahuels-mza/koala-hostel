import { makeStyles } from "tss-react/mui";

const useStylesHostelPage = makeStyles()((theme) => ({
  container: {
    // maxWidth: "75%",
    width:"-webkit-fill-available",
    padding: "8px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100% !important",
      height: "80%"
    },
    borderRadius: 8,
  },

  parallax: {
    [theme.breakpoints.up("lg")]: {
      minHeight: "100vh",
    },
    backgroundAttachment: "fixed",
    backgroundPosition: "0% 35%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      minHeight: "80vh",
      backgroundAttachment: "local",
      backgroundPosition: "0% 45%",
    },
  },
  imageContainer: {
    [theme.breakpoints.down("sm")]: {
      height: "70%",
    },
    height: "auto",
    borderRadius: 8,
  },
  body: {
    minHeight: "100vh",
    backgroundColor: "#14535752"
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
