import { makeStyles } from "tss-react/mui";
const imageWidthProp = window.screen.width * 0.7;
const imageHeightProp = window.screen.width * 0.5;
const useIdentityStyles = makeStyles()((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  card: {
    textAlign:"justify",
    alignContent: "start",
    overflow: "auto",
    maxWidth: imageWidthProp,
    width: "250px",
    height: "250px",
    maxHeight: imageHeightProp,
  },
  imageCard:{
    width: "250px",
    height: "250px",
    textAlign:"center",
  }
}));

export default useIdentityStyles;
