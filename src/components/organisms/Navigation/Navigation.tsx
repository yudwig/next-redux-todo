import * as React from "react";
import { useState } from "react";
import { Box, List } from "@material-ui/core";
import MiniVariantDrawer from "../../molecules/MiniVariantDrawer/MiniVariantDrawer";
import Navbar from "../../molecules/Navbar/Navbar";
import DrawerLinkItem from "../../atoms/DrawerLinkItem/DrawerLinkItem";

const Navigation: React.FC = (args) => {
  const [isOpenSidebar, setSidebarState] = useState(false);
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
          <List>
            {/* TODO: DI */}
            <DrawerLinkItem text="test" icon="icon" uri="uri" />
            <DrawerLinkItem text="test" icon="icon" uri="uri" />
            <DrawerLinkItem text="test" icon="icon" uri="uri" />
          </List>
        </MiniVariantDrawer>
        <main>{args.children}</main>
      </Box>
    </>
  );
};

export default Navigation;
