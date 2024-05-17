import * as React from 'react';

import dayjs from 'dayjs';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import { Box, Button, Typography } from '@mui/material';

export default function ControlledComponent() {
    const today = dayjs(new Date())


    return (
        <Box
            sx={{
                "background-color": "floralwhite",
            }}
            padding={2}
        >
            <Typography
                variant="h5"
                textAlign="center"> Seleccione su Estadia
            </Typography>
            <Box alignItems="center"
                justifyContent="space-between"
                width="35%"
                margin="auto"
                display={'flex'}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <MobileDatePicker
                            label="Llegada"
                            defaultValue={dayjs(today)}
                            disablePast
                            maxDate={dayjs().add(2, 'month')}
                        />
                        <MobileDatePicker
                            label="Salida"
                            defaultValue={dayjs().add(7, 'day')}
                            disablePast
                            maxDate={dayjs().add(2, 'month')}

                        />
                    </DemoContainer>
                </LocalizationProvider>
                <Button href="/reserve" variant="contained" color="primary" size="large" disableElevation>
                    Reserve
                </Button>
            </Box>
        </Box >
    );
}
