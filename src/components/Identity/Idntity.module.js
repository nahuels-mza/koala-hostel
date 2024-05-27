import { makeStyles } from "tss-react/mui";
const imageWidthProp = window.screen.width * 0.3;
const imageHeightProp = window.screen.height * 0.5;
const useIdentityStyles = makeStyles()((theme) => ({
  container: {
    width: "100%",
    height: imageHeightProp,
    // backgroundColor: "#0cbfdb",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",

  },
  card: {
    maxWidth: imageWidthProp,
    maxHeight: '80%',
    overflow: "auto"
  },
}));

export default useIdentityStyles;
