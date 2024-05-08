import * as React from 'react';

import dayjs, { Dayjs } from 'dayjs';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import { Box, Button, Typography } from '@mui/material';

export default function ControlledComponent() {
    const today = dayjs(new Date())
    const [value, setValue] = React.useState<Dayjs | null>(null);

    return (
        <Box alignItems="center" flexDirection={'inherit'}>
            <Typography
                variant="h5"
                textAlign="center"> Seleccione su Estadia
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <MobileDatePicker label="Llegada" defaultValue={dayjs(today)} />
                    <MobileDatePicker
                        label="Salida"
                        defaultValue={dayjs(today)}
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </DemoContainer>
            </LocalizationProvider>
            <Button href="/reserve" variant="contained" color="primary" size="large" disableElevation>
                Reserve
            </Button>
        </Box>
    );
}
