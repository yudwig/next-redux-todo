import * as React from "react";
import { AppBar, Box, Toolbar } from "@material-ui/core";
import SiteLogo from "../../atoms/SiteLogo/SiteLogo";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";

interface Props {
  title: string;
  onToggleDrawer: () => void;
}

const Navbar: React.FC<Props> = (props) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <HamburgerButton onClick={props.onToggleDrawer} />
        <Box pl={1}>
          <SiteLogo title="Todo List" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
