import React, { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { Box, Button, Grid } from "@mui/material";
import { isMobile } from "../../utils/constant";
import { locale } from "../../utils/locale";

export default function BookDateRange() {
    const [startDate, setStartDate] = useState<string>(dayjs(new Date()).format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState<string>(dayjs(new Date()).add(1, 'day').format("YYYY-MM-DD"));
    const [todayStart, setTodayStart] = useState<dayjs.Dayjs>();

    const gridOrder = isMobile ? "column" : "row"

    const handleDateOnChange = (type: 'start' | 'end', date: dayjs.Dayjs | null) => {
        if (!date) return
        const dateSet = `${date.year()}-${date.month() + 1}-${date.date()}`;
        if (type === 'start') {
            setStartDate(dateSet)
            setTodayStart(date)
        } else {
            setEndDate(dateSet)
        }
    }

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
                sx={{ "text-align-last": "center", padding: "2px" }}
                id="dates"
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid display="flex" flexDirection={gridOrder}>
                        <Box paddingBottom={"5px"} paddingTop={"5px"} >
                            <DesktopDatePicker
                                label={locale("dateL")}
                                value={dayjs(todayStart)}
                                disablePast
                                maxDate={dayjs().add(2, "month")}
                                onChange={(value) => handleDateOnChange('start', value)}
                            />
                        </Box>
                        <Box paddingTop={"5px"}>
                            <DesktopDatePicker
                                label={locale("dateS")}
                                value={dayjs(startDate).add(1, "day")}
                                minDate={dayjs(startDate).add(1, "day")}
                                maxDate={dayjs().add(2, "month")}
                                onChange={(value) => handleDateOnChange('end', value)}
                            />
                        </Box>
                    </Grid>
                </LocalizationProvider>
            </Box>
            <Box padding={1}>
                <Button
                    endIcon={<OpenInNewIcon />}
                    href={`https://banana-hotels.com/new-search/hostel-plaza/${startDate}/${endDate}/both`}
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
