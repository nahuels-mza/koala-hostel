import { makeStyles } from 'tss-react/mui'

const useSpotifyStyles = makeStyles()((theme) => ({
     container: {
        width: "100%",
        backgroundColor: "#a8eca82e",
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        flexDirection:"column",
        justifyContent: 'space-evenly',
     },

}));

  export default useSpotifyStyles