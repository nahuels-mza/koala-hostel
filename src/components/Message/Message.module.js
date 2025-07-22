import { makeStyles } from "tss-react/mui";
// import { padding } from "@mui/system";

const useMessageStyles = makeStyles()((theme) => ({

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
    height: 40,
  },
  Message: {
    "& svg": {
      fill: "#ab83ab",
    },
  },
}));

export default useMessageStyles;
