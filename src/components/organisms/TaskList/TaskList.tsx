import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskListItem from "../../molecules/TaskListItem/TaskListItem";
import selectors from "../../../states/tasks/selectors";
import operations from "../../../states/tasks/operations";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectors.getInboxTasks) || [];
  const dispatch = useDispatch();

  const findTask = (id: string) => tasks.find((task) => task.props.id === id);

  const onClickStatusIndicator = (id: string) => {
    const task = findTask(id);
    if (task) {
      dispatch(operations.toggleStatus(task.entity));
    }
  };

  const onClickArchiveButton = (id: string) => {
    const task = findTask(id);
    if (task) {
      dispatch(operations.archive(task.entity));
    }
  };

  const onEnterTitle = (id: string, title: string) => {
    const task = findTask(id);
    if (task) {
      dispatch(operations.updateTitle(task.entity, title));
    }
  };

  const taskList = tasks.map((task) => (
    <TaskListItem
      key={task.props.id}
      id={task.props.id}
      title={task.props.title}
      isCompleted={task.props.isCompleted}
      onClickStatusIndicator={onClickStatusIndicator}
      onClickArchiveButton={onClickArchiveButton}
      onEnterTitle={onEnterTitle}
    />
  ));

  return <div>{taskList}</div>;
};

export default TaskList;
