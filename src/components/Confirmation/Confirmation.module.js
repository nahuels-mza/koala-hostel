import { makeStyles } from "tss-react/mui";
// import { padding } from "@mui/system";

const useConfirmationStyles = makeStyles()((theme) => ({
  container: {
    position: "relative",
    bottom: 0,
    backgroundColor: "#b9daf252",
    minHeight: "200px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  icon: {
    cursor: "pointer",
    color: "#895b89",
    fontSize: '3rem !important',
    margin: '1rem'
  },
  confirmation: {
    "& svg": {
      fill: "#ab83ab",
    },
  },
}));

export default useConfirmationStyles;
