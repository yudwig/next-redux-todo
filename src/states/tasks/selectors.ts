import { createSelector } from "reselect";

const tasksSelector = (state: any) => state.tasks;

const getAllTasks = tasksSelector;

const getTodoTasks = createSelector([tasksSelector], (tasks) =>
  tasks ? tasks.filter((task: any) => task.status === false) : []
);

const getArchivedTasks = createSelector([tasksSelector], (tasks) =>
  tasks ? tasks.filter((task: any) => task.status === true) : []
);

export default {
  getAllTasks,
  getTodoTasks,
  getArchivedTasks,
};
