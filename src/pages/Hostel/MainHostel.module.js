import { makeStyles } from "tss-react/mui";

const useStylesHostelPage = makeStyles()((theme) => ({
  container: {
    maxWidth: "75%",
    width:"-webkit-fill-available",
    padding: "4px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100% !important",
      height: "80%"
    },

  },
  imageContainer: {
    [theme.breakpoints.down("sm")]: {
      height: "80%",
    },
    height: "auto",
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
