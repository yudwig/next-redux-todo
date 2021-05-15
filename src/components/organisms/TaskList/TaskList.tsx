import * as React from "react";
import { useSelector } from "react-redux";
import TaskListItem from "../../molecules/TaskListItem/TaskListItem";
import selectors from "../../../states/tasks/selectors";
import Task from "../../../models/Task/Task";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectors.getAllTasks) || [];

  const taskList = tasks.map((task: Task, index: any) => (
    <TaskListItem
      key={index.toString()}
      title={task.title}
      isCompleted={task.isCompleted()}
    />
  ));

  return <div>{taskList}</div>;
};

export default TaskList;
