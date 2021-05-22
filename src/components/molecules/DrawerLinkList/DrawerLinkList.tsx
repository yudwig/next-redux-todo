import * as React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import styled from "styled-components";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Link from "next/link";

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
    <List>
      <Link href="/" passHref>
        <ListItem button component="a">
          <StyledIcon>
            <CheckBoxOutlinedIcon />
          </StyledIcon>
          <StyledText primary="Inbox" />
        </ListItem>
      </Link>
      <Link href="/tasks/archived" passHref>
        <ListItem button component="a">
          <StyledIcon>
            <DeleteOutlineIcon />
          </StyledIcon>
          <StyledText primary="Archive" />
        </ListItem>
      </Link>
    </List>
  );
};

export default DrawerLinkList;
