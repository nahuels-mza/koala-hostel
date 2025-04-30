import { Box } from "@mui/material";
import useReservationStyles from "./Reservation.module";
import { isMobile } from "../../utils/constant";

export default function Reserve() {
  const { classes } = useReservationStyles()

  return (
    <Box className={classes.container}
      sx={{
        flexDirection: isMobile ? "column" : "row",
        backgroundColor: theme => theme.palette.secondary.main
      }}
    >


      <Box className={classes.widget} id="reserve">

        <div id="banana-desk-booking-widget" />

      </Box>
    </Box >
  )
}
