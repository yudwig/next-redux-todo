import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MiniVariantDrawer from "../MiniVariantDrawer/MiniVariantDrawer";

interface Props {
  title: string;
}

const Navbar: React.FC<Props> = ({ title }) => {
  const [isOpenSidebar, setSidebarState] = useState(false);
  const openSidebar = () => {
    setSidebarState(true);
  };
  const closeSidebar = () => {
    setSidebarState(false);
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={openSidebar}>
          <MenuIcon />
        </IconButton>
        <MiniVariantDrawer open={isOpenSidebar} onClose={closeSidebar}>
          <div>test</div>
        </MiniVariantDrawer>
        <Box pl={1}>
          <Typography variant="h6">{title}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
