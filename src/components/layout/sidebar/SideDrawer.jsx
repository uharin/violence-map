import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

import { styled } from '@mui/material/styles';
import sideDrawerStyles from './sideDrawerStyles';

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ open }) => ({
  ...sideDrawerStyles.drawer,
  ...(open && {
    ...sideDrawerStyles.openedMixin,
    '& .MuiDrawer-paper': sideDrawerStyles.openedMixin,
  }),
  ...(!open && {
    ...sideDrawerStyles.closedMixin,
    '& .MuiDrawer-paper': sideDrawerStyles.closedMixin,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  ...sideDrawerStyles.drawerHeader,
  // Necessary for content to be below app bar
  // For whatever reason, cannot be moved to sideDrawerStyles.js
  ...theme.mixins.toolbar,
}));

const SideDrawer = ({ open, setIsOpen, setOpenModal }) => {
  return (
    <Drawer
      variant="permanent"
      className={open ? sideDrawerStyles.drawerOpen : sideDrawerStyles.drawerClose}
      open={open}
    >
      <DrawerHeader className={sideDrawerStyles.drawerHeader}>
        <IconButton onClick={setIsOpen} />
      </DrawerHeader>
      <List>
        {['Search', 'Reports'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={text === 'Search' ? setOpenModal : null}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {index % 2 === 0 ? <LocationSearchingIcon /> : <BarChartIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideDrawer;
