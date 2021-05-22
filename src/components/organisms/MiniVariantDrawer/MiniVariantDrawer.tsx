import React from "react";
import { Drawer, DrawerProps } from "@material-ui/core";
import styled from "styled-components";

const StyledDrawer = styled(Drawer)`
  .text {
    display: ${(props) => (props.open ? "block" : "none")};
  }
  .MuiPaper-root {
    z-index: 1;
    padding-top: 70px;
  }
  &,
  .MuiDrawer-root,
  .MuiPaper-root {
    width: ${(props) => (props.open ? "200px" : "58px;")};
  }
`;

const MiniVariantDrawer: React.FC<DrawerProps> = (props) => {
  return (
    <StyledDrawer variant="permanent" {...props}>
      {props.children}
    </StyledDrawer>
  );
};
export default MiniVariantDrawer;
