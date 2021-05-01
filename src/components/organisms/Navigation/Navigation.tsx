import * as React from "react";
import { useState } from "react";
import { Box } from "@material-ui/core";
import MiniVariantDrawer from "../../molecules/MiniVariantDrawer/MiniVariantDrawer";
import Navbar from "../../molecules/Navbar/Navbar";
import DrawerLinkList from "../DrawerLinkList/DrawerLinkList";

const Navigation: React.FC = (args) => {
  const [isOpenSidebar, setSidebarState] = useState(true);
  const openSidebar = () => {
    setSidebarState(true);
  };
  const closeSidebar = () => {
    setSidebarState(false);
  };
  const toggleSidebar = () => {
    setSidebarState(!isOpenSidebar);
  };

  return (
    <>
      <Navbar title="Todo List" onToggleDrawer={toggleSidebar} />
      <Box>
        <MiniVariantDrawer open={isOpenSidebar} onClose={closeSidebar}>
          <DrawerLinkList />
        </MiniVariantDrawer>
        <main>{args.children}</main>
      </Box>
    </>
  );
};

export default Navigation;
