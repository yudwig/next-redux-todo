import * as React from "react";
import { useState } from "react";
import { Box, Container } from "@material-ui/core";
import styled from "styled-components";
import MiniVariantDrawer from "../../molecules/MiniVariantDrawer/MiniVariantDrawer";
import Navbar from "../../molecules/Navbar/Navbar";
import DrawerLinkList from "../DrawerLinkList/DrawerLinkList";

const Content = styled.main`
  padding: 50px;
  width: 100%;
`;

interface Props {
  title: string;
}

const Navigation: React.FC<Props> = (props) => {
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
      <Navbar title={props.title} onToggleDrawer={toggleSidebar} />
      <Box display="flex">
        <MiniVariantDrawer open={isOpenSidebar} onClose={closeSidebar}>
          <DrawerLinkList />
        </MiniVariantDrawer>
        <Content>
          <Container maxWidth="sm">
            <Box>{props.children}</Box>
          </Container>
        </Content>
      </Box>
    </>
  );
};

export default Navigation;
