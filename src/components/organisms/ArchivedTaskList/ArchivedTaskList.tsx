import * as React from "react";
import { useDispatch } from "react-redux";
import { ViewObject } from "../../../states/tasks/selectors";
import TaskListItem from "../../molecules/TaskListItem/TaskListItem";
import operations from "../../../states/tasks/operations";

interface Props {
  tasks: ViewObject[];
}

const ArchivedTaskList: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const findTask = (id: string) =>
    props.tasks.find((task) => task.props.id === id);

  const onClickUnarchiveButton = (id: string) => {
    const task = findTask(id);
    if (task) {
      dispatch(operations.unarchive(task.entity));
    }
  };

  const taskList = props.tasks.map((task) => (
    <TaskListItem
      key={task.props.id}
      title={task.props.title}
      completed={task.props.isCompleted}
      disabled
      buttonType="unarchive"
      onClickButton={() => onClickUnarchiveButton(task.props.id)}
    />
  ));

  return <div>{taskList}</div>;
};

export default ArchivedTaskList;
