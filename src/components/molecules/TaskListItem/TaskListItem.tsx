import * as React from "react";
import { ListItem } from "@material-ui/core";
import TaskStatusToggler from "../../atoms/TaskStatusToggler/TaskStatusToggler";
import TaskArchiveButton from "../../atoms/TaskArchiveButton/TaskArchiveButton";

interface Props {
  title: string;
}

const TaskListItem: React.FC<Props> = ({ title }) => {
  return (
    <>
      <ListItem>
        <TaskStatusToggler />
        {title}
        <TaskArchiveButton />
      </ListItem>
    </>
  );
};

export default TaskListItem;
