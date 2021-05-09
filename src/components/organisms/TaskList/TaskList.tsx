import * as React from "react";
import { useSelector } from "react-redux";
import TaskListItem from "../../molecules/TaskListItem/TaskListItem";
import selectors from "../../../states/tasks/selectors";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectors.getAllTasks) || [];

  const taskList = tasks.map((task: any, index: any) => (
    <TaskListItem
      key={index.toString()}
      title={task.title}
      status={task.status}
    />
  ));

  return <div>{taskList}</div>;
};

export default TaskList;
