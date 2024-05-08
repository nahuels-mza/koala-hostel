import React from "react";
import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const MainLayout = () => {
  // const { classes } = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Box >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<TwitterIcon />} />
        <BottomNavigationAction icon={<InstagramIcon />} />
        <BottomNavigationAction icon={<EmailIcon />} />
        <BottomNavigationAction icon={<WhatsAppIcon />} />
      </BottomNavigation>
      <Outlet />
    </Box>

  );
};

export default MainLayout;
