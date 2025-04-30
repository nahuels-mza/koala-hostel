import React, { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { Box, Button, Grid } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { isMobile } from "../../utils/constant";

export default function BookDateRange() {
    const today = dayjs(new Date());
    const gridOrder = isMobile ? "column" : "row"

    return (
        <Box
            sx={{
                backgroundColor: theme => theme.palette.secondary.main,
                placeContent: "center",
            }}
            component={"section"}
            flexDirection={"row"}
            display={"flex"}
            alignItems="center"
        >
            <Box

                sx={{ "text-align-last": "center", justifyContent: "center" }}
                id="dates"
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid display="flex" flexDirection={gridOrder}>
                        <Box paddingBottom={"5px"} paddingTop={"5px"} >
                            <MobileDatePicker
                                label="Llegada"
                                defaultValue={dayjs(today)}
                                disablePast
                                maxDate={dayjs().add(2, "month")}
                            />
                        </Box>
                        <Box paddingTop={"5px"}>
                            <MobileDatePicker
                                label="Salida"
                                defaultValue={dayjs().add(7, "day")}
                                disablePast
                                maxDate={dayjs().add(2, "month")}
                            />
                        </Box>
                    </Grid>
                </LocalizationProvider>
            </Box>
            <Box padding={1}>
                <Button
                    endIcon={<OpenInNewIcon />}
                    href="https://banana-hotels.com/new-search/hostel-plaza/2025-04-25/2025-04-26/both"
                    variant="contained"
                    color="primary"
                    size="large"
                    target="_blank"
                >
                    Book
                </Button>
            </Box>
        </Box>
    );
}
