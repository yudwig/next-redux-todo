import { createSelector } from "reselect";

const tasksSelector = (state: any) => state.tasks;

const getTodoTasks = createSelector(tasksSelector, (tasks) =>
  tasks.filter((task: any) => task.status === false)
);

const getArchivedTasks = createSelector(tasksSelector, (tasks) =>
  tasks.filter((task: any) => task.status === true)
);

export default {
  getTodoTasks,
  getArchivedTasks,
};
