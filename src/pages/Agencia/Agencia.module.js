import { makeStyles } from "tss-react/mui";

const useStylesAgencia = makeStyles()((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
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
}));

export default useStylesAgencia;
