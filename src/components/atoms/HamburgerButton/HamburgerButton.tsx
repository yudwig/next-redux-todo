import * as React from "react";
import { IconButton, IconButtonProps } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const HamburgerButton: React.FC<IconButtonProps> = ({ ...args }) => {
  return (
    <IconButton edge="start" color="inherit" {...args}>
      <MenuIcon />
    </IconButton>
  );
};

export default HamburgerButton;
