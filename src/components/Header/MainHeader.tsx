import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button, Link, Menu } from '@mui/material';

import Logo from '../../assets/mini-logo.png'

export default function Header() {

    const options = [{

        "name": "Quienes somos",
        "id": "/ourselves"
    }, {
        "name": "Nuestra Agencia",
        "id": "/agencia"
    }, {
        "name": "Nuestro Hostel",
        "id": "/"
    }
    ]
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Box sx={{ flexGrow: 1 }} component='header'>
            <AppBar position="static" >
                <Toolbar>
                    <Button href={'/'}>
                        <Box
                            component="img"
                            sx={{ height: 64 }}
                            src={Logo}
                            color={'inherit'}

                        />
                    </Button>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} align='center'>
                        Acacias
                    </Typography>
                    <div>
                        <IconButton
                            sx={{ 'color': '#fff' }}
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}

                        >

                            {options.map((option) => (
                                <MenuItem disabled={window.location.pathname === option.id}
                                    key={option.name} selected={option.name === ''}
                                    onClick={handleClose}
                                    sx={{ backgroundColor: theme => theme.palette.secondary.main }}>
                                    <Link href={option.id} color="inherit" underline="none">
                                        {option.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
