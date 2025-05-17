import { makeStyles } from "tss-react/mui";

const useitemListStyles = makeStyles()((theme) => ({
  everyItem:{
    backgroundColor: "#e6e6e699",
    borderTop: "2.5px solid",
    height: "70%",
    borderTopColor:"#145357",
    marginBottom: "2px",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderColor: "red"
  },
  detailsBedroom:{
    width: "75%",
    flexGrow: 1,
    height: "70%",
    backgroundColor: "white",
    borderColor: "#FEF8EC",
    borderBlock: "1.5px"
  },


}));

export default useitemListStyles;
