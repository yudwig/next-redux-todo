import * as React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface Props {
  text: string;
  icon: string;
  uri: string;
}

const DrawerLinkItem: React.FC<Props> = (props) => {
  return (
    <ListItem button key={props.text}>
      <ListItemIcon />
      <ListItemText primary={props.text} />
    </ListItem>
  );
};

export default DrawerLinkItem;
