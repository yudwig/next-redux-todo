import actions from "./actions";
import { Factory } from "../../models/Task/Factory";
import Task from "../../models/Task/Task";

export const create = (title: string) => {
  const task = Factory.create({ title });
  return actions.createTask(task.serialize());
};

export const updateTitle = (task: Task, title: string) => {
  task.changeTitle(title);
  return actions.updateTask(task.getId(), task.serialize());
};

export const toggleStatus = (task: Task) => {
  task.toggleStatus();
  return actions.updateTask(task.getId(), task.serialize());
};

export const archive = (task: Task) => {
  task.archive();
  return actions.updateTask(task.getId(), task.serialize());
};

export default {
  create,
  updateTitle,
  toggleStatus,
  archive,
};
