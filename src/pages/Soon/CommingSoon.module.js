import { makeStyles } from "tss-react/mui";

const imageHeight = window.screen.height * 0.85;
const imageWidth = window.screen.width ;
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
const useStylesCommingSoon = makeStyles()((theme) => ({

    containerSoon:{

        [theme.breakpoints.down("sm")]: {
              width: "90%",
              height: "90%"

          },
        [theme.breakpoints.down("md")]: {
            width: imageWidth,
            height: imageHeight
          },
          backgroundColor: "#FEF8EC",

    },
    imageSoon:{
        objectFit: "contain",
        [theme.breakpoints.down("sm")]: {
            width: imageWidth,
            height: "85%"
        },
    }

}))

export default useStylesCommingSoon;