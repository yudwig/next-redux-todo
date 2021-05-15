import * as React from "react";
import { useSelector } from "react-redux";
import TaskListItem from "../../molecules/TaskListItem/TaskListItem";
import selectors from "../../../states/tasks/selectors";
import Task from "../../../models/Task/Task";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectors.getAllTasks) || [];

  const onClickStatusIndicator = (id: string) => {
    console.log("status change.", id);
  };

  const onClickArchiveButton = (id: string) => {
    console.log("archive.", id);
  };

  const taskList = tasks.map((task: Task) => (
    <TaskListItem
      key={task.getId()}
      id={task.getId()}
      title={task.title}
      isCompleted={task.isCompleted()}
      onClickStatusIndicator={onClickStatusIndicator}
      onClickArchiveButton={onClickArchiveButton}
    />
  ));

  return <div>{taskList}</div>;
};

export default TaskList;
