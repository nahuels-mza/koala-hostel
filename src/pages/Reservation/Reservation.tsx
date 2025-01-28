import { Box } from "@mui/material";
import useReservationStyles from "./Reservation.module";

export default function Reserve() {
  const { classes } = useReservationStyles()

  return (
    <Box flexDirection={"row"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box className={classes.container} id="reserve">
        Como reservar?
        <p />
        1. elegir las fechas
        <p />
        2. elegir tipo de camas
        <p />
        3. Hacer click en search
        <p />
        4. Esto nos llevara directo al motor de reserva
        <p />
        5. Elegir las habitaciones
        <p />
        6. y pagar
      </Box>
      <Box className={classes.container} id="reserve">

        <div id="banana-desk-booking-widget" />

      </Box>
    </Box>
  )
}
