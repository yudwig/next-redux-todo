import * as React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { ListItemIcon } from "@material-ui/core";

const TaskArchiveButton: React.FC = () => {
  return (
    <ListItemIcon>
      <DeleteOutlineIcon />
    </ListItemIcon>
  );
};

export default TaskArchiveButton;
