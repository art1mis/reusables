import React from 'react';
import { Layout as AppLayout, Center } from '../';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default {
  title: 'Layout',
  component: AppLayout,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => {
  return (
    <AppLayout {...args}>
      {({ appbar, drawer, content, toggleDrawer }) => (
        <>
          <AppBar {...appbar} variant="static">
            <Toolbar>
              <Typography variant="h6">AppBar</Typography>
            </Toolbar>
          </AppBar>
          <Drawer {...drawer}>
            <List>
              <ListItem>
                <ListItemText primary="Drawer" />
              </ListItem>
            </List>
          </Drawer>
          <Box {...content}>
            <Typography variant="h6" sx={{ m: 2 }}>
              Hey! Content Here
            </Typography>
            <Center>
              <Button onClick={() => toggleDrawer()}>Toggle Drawer</Button>
            </Center>
          </Box>
        </>
      )}
    </AppLayout>
  );
};

export const Layout = Template.bind({});

Layout.args = {
  drawerWidth: 240,
  drawerAnchor: 'left',
};
