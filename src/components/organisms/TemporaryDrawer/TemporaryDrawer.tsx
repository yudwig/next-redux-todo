import * as React from "react";
import { Box, Drawer, DrawerProps } from "@material-ui/core";
import styled from "styled-components";
import CloseButton from "../../atoms/CloseButton/CloseButton";

const StyledDrawer = styled(Drawer)`
  &,
  .MuiDrawer-root,
  .MuiPaper-root {
    width: 200px;
  }
`;

const DrawerHeader = styled(Box)`
  height: 70px;
  padding: 9px;
`;

interface Props extends DrawerProps {
  onClickCloseButton: () => void;
}

const TemporaryDrawer: React.FC<Props> = (props) => {
  return (
    <StyledDrawer {...props}>
      <DrawerHeader>
        <CloseButton onClick={props.onClickCloseButton} />
      </DrawerHeader>
      {props.children}
    </StyledDrawer>
  );
};

export default TemporaryDrawer;
