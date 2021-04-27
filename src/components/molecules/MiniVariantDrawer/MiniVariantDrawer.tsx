import React from "react";
import { Drawer, DrawerProps } from "@material-ui/core";

const MiniVariantDrawer: React.FC<DrawerProps> = ({ children, ...props }) => {
  return (
    <Drawer {...props}>
      <span>Mini Variant Drawer</span>
      {children}
    </Drawer>
  );
};
export default MiniVariantDrawer;
