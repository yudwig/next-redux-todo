import * as React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import styled from "styled-components";

const StyledIcon = styled(ListItemIcon)`
  &.MuiListItemIcon-root {
    min-width: 0;
  }
`;

const StyledText = styled(ListItemText)`
  margin: 0 15px;
`;

const DrawerLinkList: React.FC = () => {
  return (
    <>
      <List>
        <ListItem button>
          <StyledIcon>
            <InboxIcon />
          </StyledIcon>
          <StyledText primary="Inbox" className="text" />
        </ListItem>
      </List>
    </>
  );
};

export default DrawerLinkList;
