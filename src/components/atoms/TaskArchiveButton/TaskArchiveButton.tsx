import * as React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IconButton } from "@material-ui/core";

const TaskArchiveButton: React.FC = () => {
  return (
    <IconButton aria-label="delete">
      <DeleteOutlineIcon />
    </IconButton>
  );
};

export default TaskArchiveButton;
