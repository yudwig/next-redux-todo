import * as React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../molecules/Navbar/Navbar";
import DrawerLinkList from "../../molecules/DrawerLinkList/DrawerLinkList";
import MiniVariantDrawer from "../MiniVariantDrawer/MiniVariantDrawer";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";
import operations from "../../../states/nav/operations";
import selectors from "../../../states/nav/selectors";

const Content = styled.main`
  width: 100%;
`;

interface Props {
  title: string;
}

const Navigation: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const nav = useSelector(selectors.getNav);

  const toggleOpenDrawer = () => {
    dispatch(operations.toggleOpenDrawer(nav.isOpenDrawer));
  };

  const toggleWidthDrawer = () => {
    dispatch(operations.toggleWidthDrawer(nav.isExpandDrawer));
  };

  const closeDrawer = () => {
    dispatch(operations.closeDrawer());
  };

  const miniVariantDrawer = (
    <MiniVariantDrawer open={nav.isExpandDrawer} onClose={toggleWidthDrawer}>
      <DrawerLinkList shortMode={!nav.isExpandDrawer} />
    </MiniVariantDrawer>
  );

  const temporaryDrawer = (
    <TemporaryDrawer
      open={nav.isOpenDrawer}
      onClose={closeDrawer}
      onClickCloseButton={closeDrawer}
    >
      <DrawerLinkList onClickLink={closeDrawer} />
    </TemporaryDrawer>
  );

  return (
    <>
      <Navbar
        title={props.title}
        onToggleDrawer={matches ? toggleWidthDrawer : toggleOpenDrawer}
      />
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
