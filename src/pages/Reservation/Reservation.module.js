import { makeStyles } from "tss-react/mui";

const useReservationStyles = makeStyles()((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    display:"flex",
  },
  widget: {
    textAlign:"justify",
    alignContent: "start",
    overflow: "auto",
    borderColor: "#FEF8EC",
    borderStyle: "solid",
    borderWidth: "medium"
  },
  instructions:{
    borderColor: "#145357",
    borderStyle: "solid",
    borderWidth: "medium",

  }

}));

export default useReservationStyles;
