import { createSelector } from "reselect";
import Task from "../../models/Task/entity";

const tasksSelector = (state: any) => state.tasks;

const getAllTasks = tasksSelector;

const getTodoTasks = createSelector([tasksSelector], (tasks) =>
  tasks ? tasks.filter((task: Task) => !task.isCompleted()) : []
);

export default {
  getAllTasks,
  getTodoTasks,
};
