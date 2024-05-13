import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../assets/acacia.png'

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }} component='header'>
            <AppBar position="static" >
                <Toolbar>
                    <Box
                        component="img"
                        sx={{ height: 64 }}
                        src={Logo}
                        color={'inherit'}
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='center'>
                        Acacias [NombrePagina]
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
