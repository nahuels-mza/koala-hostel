import { makeStyles } from "tss-react/mui";

const useStylesAgencia = makeStyles()((theme) => ({
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
  imageContainer: {
    alignItems: "center",
    width: "90%",
    marginBottom: "10px",

    [theme.breakpoints.down("sm")]: {
      height: "auto",width: "95%",
    },
    objectFit: "cover",
    height:"50%",
    padding: "20px"
  },
  parallax: {
    minHeight: "100vh",

    // backgroundAttachment: "fixed",
    // backgroundPosition: "0% 25%",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // [theme.breakpoints.down("sm")]: {
    //   backgroundPosition: "30%",
    // },
  },
}));

export default useStylesAgencia;
