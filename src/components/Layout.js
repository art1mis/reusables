import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (props) => props !== "hideAppBarStyles",
})(({ hideAppBarStyles, theme }) => {
  return {
    transition: theme.transitions.create("width"),
    color:
      theme.palette.mode === "dark"
        ? theme.palette.grey[500]
        : theme.palette.grey[800],
    ...(hideAppBarStyles
      ? {
          boxShadow: "none",
          background: "transparent",
        }
      : {
          boxShadow: `inset 0px -1px 1px ${
            theme.palette.mode === "dark"
              ? theme.palette.primaryDark[700]
              : theme.palette.grey[100]
          }`,
          background:
            theme.palette.mode === "dark"
              ? theme.palette.primaryDark[900]
              : "#FFF",
        }),
  };
});

function Layout(props) {
  const { hideAppBarStyles, toolbar, window, drawer, hideDrawer, ...others } =
    props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleDrawer = () => {
    if (!hideDrawer) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const bigScreen = useMediaQuery("(min-width:600px)");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <StyledAppBar
        position="fixed"
        sx={{
          width: hideDrawer ? "100%" : { sm: `calc(100% - ${drawerWidth}px)` },
          ml: hideDrawer ? 0 : { sm: `${drawerWidth}px` },
        }}
        hideAppBarStyles={hideAppBarStyles}
      >
        <Toolbar>
          {React.Children.map(toolbar, (Tool) => (
            <Tool toggleDrawer={toggleDrawer} />
          ))}
        </Toolbar>
      </StyledAppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: hideDrawer ? 0 : drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          container={container}
          variant={bigScreen ? "permanent" : "temporary"}
          open={hideDrawer ? false : bigScreen ? true : mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: hideDrawer ? 0 : drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          position: "absolute",
          width: hideDrawer
            ? "100%"
            : {
                sm: `calc(100% - ${drawerWidth}px)`,
                xs: "100%",
              },
          ml: hideDrawer ? 0 : { sm: `${drawerWidth}px` },
          top: 0,
          bottom: 0,
          "@media (min-width: 0px) and (orientation: landscape)": {
            mt: 6.4,
          },
          mt: {
            xs: 5.6,
            sm: 6.4,
          },
        }}
        {...others}
      />
    </Box>
  );
}

Layout.propTypes = {
  window: PropTypes.func,
  hideAppBarStyles: PropTypes.bool,
  hideDrawer: PropTypes.bool,
};

Layout.defaultProps = {
  toolbar: <></>,
  drawer: <></>,
  hideAppBarStyles: false,
  hideDrawer: false,
};

export default Layout;
