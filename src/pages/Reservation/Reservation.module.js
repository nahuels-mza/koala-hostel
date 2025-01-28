import { makeStyles } from "tss-react/mui";
const imageWidthProp = window.screen.width * 0.7;
const imageHeightProp = window.screen.width * 0.5;
const useReservationStyles = makeStyles()((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    display:"grid",
    maxWidth:"fit-content",
    justifySelf:"center",
    padding:"10px"
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

}));

export default useReservationStyles;
