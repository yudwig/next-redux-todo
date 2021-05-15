import { createSelector } from "reselect";
import { Factory } from "../../models/Task/Factory";
import Task from "../../models/Task/Task";

const tasksSelector = (state: any) =>
  state.tasks.map((task: any) => Factory.create(task));

const getAllTasks = tasksSelector;

const getTodoTasks = createSelector([tasksSelector], (tasks) =>
  tasks ? tasks.filter((task: Task) => !task.isCompleted()) : []
);

export default {
  getAllTasks,
  getTodoTasks,
};
