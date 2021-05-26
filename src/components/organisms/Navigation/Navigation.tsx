import * as React from "react";
import { useState } from "react";
import { Box, Container, useMediaQuery, useTheme } from "@material-ui/core";
import styled from "styled-components";
import Navbar from "../../molecules/Navbar/Navbar";
import DrawerLinkList from "../../molecules/DrawerLinkList/DrawerLinkList";
import MiniVariantDrawer from "../MiniVariantDrawer/MiniVariantDrawer";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";

const Content = styled.main`
  width: 100%;
`;

interface Props {
  title: string;
}

const Navigation: React.FC<Props> = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [isOpenSidebar, setSidebarState] = useState(true);
  const closeSidebar = () => {
    setSidebarState(false);
  };
  const toggleSidebar = () => {
    setSidebarState(!isOpenSidebar);
  };

  const miniVariantDrawer = (
    <MiniVariantDrawer open={isOpenSidebar} onClose={closeSidebar}>
      <DrawerLinkList shortMode={!isOpenSidebar} />
    </MiniVariantDrawer>
  );

  const temporaryDrawer = (
    <TemporaryDrawer
      open={isOpenSidebar}
      onClose={closeSidebar}
      onClickCloseButton={closeSidebar}
    >
      <DrawerLinkList />
    </TemporaryDrawer>
  );

  return (
    <>
      <Navbar title={props.title} onToggleDrawer={toggleSidebar} />
      <Box display="flex">
        {matches ? miniVariantDrawer : temporaryDrawer}
        <Content>
          <Container maxWidth="xl">
            <Box>{props.children}</Box>
          </Container>
        </Content>
      </Box>
    </>
  );
};

export default Navigation;
