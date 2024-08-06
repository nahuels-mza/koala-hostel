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

  iconWasp: {
    cursor: "pointer",
    color: "#128C7E",
    height: 40,
    margin: "1rem",
    fontSize: "3rem !important",
  },
  iconInsta: {
    cursor: "pointer",
    color: "#C13584 ",
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
