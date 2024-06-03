import { makeStyles } from "tss-react/mui";
const imageWidthProp = window.screen.width * 0.4;
const imageHeightProp = window.screen.height * 0.3;
const useIdentityStyles = makeStyles()((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  card: {
    maxWidth: imageWidthProp,
    height: imageHeightProp,
    overflow: "auto"
  },
}));

export default useIdentityStyles;
