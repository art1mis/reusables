import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import sxc from '../mui/sxc';

/*
  Drawer
  => Only left and right anchor are supported. Other anchors are need to be implemented in the Drawer component itself.
  => drawerAnchor prop can be used to change between left and right drawer.
  => Drawer will have temporary variant in small screens and permanent variant in large screen, until overrided by the drawerVariant prop.
  => drawerWidth can be changed using drawerWidth prop
*/

const Layout = ({ drawerWidth, drawerVariant, drawerAnchor, children }) => {
  if (!(drawerAnchor === 'left' || drawerAnchor === 'right')) {
    throw new Error(
      'drawerAnchor can either be left or right. Other values are not supported.',
    );
  }

  if (typeof children !== 'function') {
    throw new Error('Layout works with functional children component only');
  }
  const [state, setState] = React.useState({
    appbar: true,
    drawer: true,
  });

  const bigScreen = useMediaQuery('(min-width:600px)');
  const toggleDrawer = React.useCallback(
    (newState) => {
      setState({
        ...state,
        drawer: typeof newState === 'boolean' ? newState : !state.drawer,
      });
    },
    [state, setState],
  );
  const _drawerVariant =
    drawerVariant || (bigScreen ? 'permanent' : 'temporary');
  const drawer = {
    open: state.drawer,
    variant: _drawerVariant,
    anchor: drawerAnchor,
    sx: (theme) => ({
      '&, & .MuiDrawer-paper': {
        flexShrink: 0,
        width: state.drawer ? drawerWidth : 0,
        // Permanent Drawer needs transition, but temporary drawer don't need that
        ...sxc(_drawerVariant === 'permanent', {
          transition: theme.transitions.create(['width']),
        }),
        // If Drawer Anchor is set to right
        ...sxc(drawerAnchor === 'right', {
          right: 0,
          position: 'absolute',
          left: 'auto',
          bottom: 0,
          top: 0,
        }),
      },
    }),
    onClose: () => toggleDrawer(false),
    ModalProps: { keepMounted: true },
  };
  // Width for appbar and content
  const width =
    _drawerVariant === 'temporary'
      ? '100%'
      : state.drawer
      ? `calc(100% - ${drawerWidth}px)`
      : '100%';
  const appbar = {
    sx: (theme) => ({
      width,
      transition: theme.transitions.create(['width']),
      // If Drawer Anchor is set to right
      ...sxc(drawerAnchor === 'right', {
        left: 0,
        right: 'auto',
      }),
    }),
  };

  const content = {
    sx: (theme) => ({
      '&::before': {
        content: '""',
        display: 'block',
        minHeight: 64,
        [theme.breakpoints.down('sm')]: {
          minHeight: 56,
        },
      },
      width,
      position: 'relative',
      transition: theme.transitions.create(['width']),
    }),
  };

  if (!state.appbar) appbar.sx.display = 'none';
  return (
    <Box
      sx={{
        display: 'flex',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
      }}
    >
      {children({ state, drawer, appbar, content, toggleDrawer })}
    </Box>
  );
};

Layout.defaultProps = {
  drawerAnchor: 'left',
  drawerWidth: 240,
};

Layout.propTypes = {
  drawerAnchor: PropTypes.oneOf(['left', 'right']),
  drawerWidth: PropTypes.number,
};

export default Layout;
