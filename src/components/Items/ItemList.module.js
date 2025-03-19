import { makeStyles } from "tss-react/mui";

const useitemListStyles = makeStyles()((theme) => ({
  everyItem:{
    backgroundColor: "#e6e6e699",
    borderTop: "2.5px solid",
    height: "90%",
    borderTopColor:"#145357",
    marginBottom: "2px",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  detailsBedroom:{
    width: "75%",
    flexGrow: 1,
    height: "90%"
  },


}));

export default useitemListStyles;
