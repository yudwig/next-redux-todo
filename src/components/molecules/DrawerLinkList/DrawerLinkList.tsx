import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import styled from "styled-components";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledIcon = styled(ListItemIcon)`
  &.MuiListItemIcon-root {
    min-width: 0;
  }
`;

const StyledText = styled(ListItemText)`
  margin: 0 15px;
`;

interface Props {
  shortMode?: boolean;
  onClickLink?: () => void;
}

const DrawerLinkList: React.FC<Props> = (props) => {
  const router = useRouter();
  const short: boolean =
    props.shortMode !== undefined ? props.shortMode : false;

  const onClickLink = () => {
    if (props.onClickLink !== undefined) {
      props.onClickLink();
    }
  };

  return (
    <List>
      <Link href="/" passHref>
        <Box onClick={onClickLink}>
          <ListItem button component="a" selected={router.pathname === "/"}>
            <StyledIcon>
              <CheckBoxOutlinedIcon />
            </StyledIcon>
            <StyledText primary={short ? "" : "Inbox"} />
          </ListItem>
        </Box>
      </Link>
      <Link href="/tasks/archived" passHref>
        <Box onClick={onClickLink}>
          <ListItem
            button
            component="a"
            selected={router.pathname === "/tasks/archived"}
          >
            <StyledIcon>
              <DeleteOutlineIcon />
            </StyledIcon>
            <StyledText primary={short ? "" : "Archive"} />
          </ListItem>
        </Box>
      </Link>
    </List>
  );
};

export default DrawerLinkList;
