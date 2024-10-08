import * as React from "react";

import dayjs from "dayjs";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { Box, Button } from "@mui/material";

export default function BookDateRange() {
    const today = dayjs(new Date());

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
                padding={0.5}
                sx={{ "text-align-last": "center", justifyContent: "center" }}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <MobileDatePicker
                            label="Llegada"
                            defaultValue={dayjs(today)}
                            disablePast
                            maxDate={dayjs().add(2, "month")}
                        />
                        <MobileDatePicker
                            label="Salida"
                            defaultValue={dayjs().add(7, "day")}
                            disablePast
                            maxDate={dayjs().add(2, "month")}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </Box>
            <Box padding={1}>
                <Button
                    href="/reserve"
                    variant="contained"
                    color="primary"
                    size="large"
                    disableElevation
                >
                    Book
                </Button>
            </Box>
        </Box>
    );
}
