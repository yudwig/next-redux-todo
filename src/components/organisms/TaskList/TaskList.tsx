import * as React from "react";

import TaskListItem from "../../molecules/TaskListItem/TaskListItem";

const TaskList: React.FC = () => {
  const tasks = [
    { title: "this is todo 1.", status: true },
    { title: "this is todo 2.", status: false },
    { title: "this is todo 3.", status: true },
  ];

  const taskList = tasks.map((task, index) => (
    <TaskListItem
      key={index.toString()}
      title={task.title}
      status={task.status}
    />
  ));

  return <div>{taskList}</div>;
};

export default TaskList;
