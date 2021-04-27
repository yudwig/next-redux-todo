import * as React from "react";
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

const TaskList: React.FC = () => {
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary="asdf" />
      </ListItem>
    </>
  );
};

export default TaskList;
