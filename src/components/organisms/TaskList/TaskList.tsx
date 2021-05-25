import * as React from "react";
import { useDispatch } from "react-redux";
import TaskListItem from "../../molecules/TaskListItem/TaskListItem";
import { ViewObject } from "../../../states/tasks/selectors";
import operations from "../../../states/tasks/operations";

interface Props {
  tasks: ViewObject[];
}

const TaskList: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const findTask = (id: string) =>
    props.tasks.find((task) => task.props.id === id);

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

  const taskList = props.tasks.map((task) => (
    <TaskListItem
      key={task.props.id}
      title={task.props.title}
      completed={task.props.isCompleted}
      disabled={false}
      buttonType="archive"
      onClickStatus={() => onClickStatusIndicator(task.props.id)}
      onClickButton={() => onClickArchiveButton(task.props.id)}
      onEnterTitle={(title: string) => onEnterTitle(task.props.id, title)}
    />
  ));

  return <div>{taskList}</div>;
};

export default TaskList;
