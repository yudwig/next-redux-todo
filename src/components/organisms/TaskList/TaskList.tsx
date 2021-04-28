import * as React from "react";

import TaskListItem from "../../molecules/TaskListItem/TaskListItem";

const TaskList: React.FC = () => {
  const tasks = [
    { title: "this is todo 1." },
    { title: "this is todo 2." },
    { title: "this is todo 3." },
  ];

  const taskList = tasks.map((task) => <TaskListItem title={task.title} />);

  return <div>{taskList}</div>;
};

export default TaskList;
