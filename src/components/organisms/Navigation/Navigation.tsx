import * as React from "react";
import { useState } from "react";
import MiniVariantDrawer from "../../molecules/MiniVariantDrawer/MiniVariantDrawer";
import Navbar from "../../molecules/Navbar/Navbar";

const Navigation: React.FC = () => {
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
      <MiniVariantDrawer open={isOpenSidebar} onClose={closeSidebar}>
        <div>test</div>
      </MiniVariantDrawer>
    </>
  );
};

export default Navigation;
