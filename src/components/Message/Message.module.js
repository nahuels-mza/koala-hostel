import { makeStyles } from "tss-react/mui";
// import { padding } from "@mui/system";

const useMessageStyles = makeStyles()((theme) => ({
  container: {
    position: "relative",
    bottom: 0,
    backgroundColor: "#ffff",
    minHeight: "200px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  icon: {
    cursor: "pointer",
    color: "#128C7E",
    fontSize: "3rem !important",
    margin: "1rem",
  },
  Message: {
    "& svg": {
      fill: "#ab83ab",
    },
  },
}));

export default useMessageStyles;
