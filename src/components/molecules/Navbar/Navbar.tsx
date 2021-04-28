import * as React from "react";
import { useState } from "react";
import { AppBar, Box, Toolbar } from "@material-ui/core";
import MiniVariantDrawer from "../MiniVariantDrawer/MiniVariantDrawer";
import SiteLogo from "../../atoms/SiteLogo/SiteLogo";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";

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
        <HamburgerButton onClick={openSidebar} />
        <MiniVariantDrawer open={isOpenSidebar} onClose={closeSidebar}>
          <div>test</div>
        </MiniVariantDrawer>
        <Box pl={1}>
          <SiteLogo title="Todo List" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
