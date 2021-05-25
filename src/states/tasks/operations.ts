import actions from "./actions";
import { Factory } from "../../models/Task/Factory";
import Task from "../../models/Task/Task";

export const create = (title: string) => {
  const task = Factory.create({ title });
  return actions.createTask(task.serialize());
};

export const updateTitle = (task: Task, title: string) => {
  try {
    task.changeTitle(title);
  } catch (e) {
    return actions.errorUpdateTaskTitle(task.getId(), e.toString());
  }
  return actions.updateTaskTitle(task.getId(), task.serialize());
};

export const toggleStatus = (task: Task) => {
  if (task.isCompleted()) {
    task.incomplete();
    return actions.incompleteTask(task.getId(), task.serialize());
  }
  task.complete();
  return actions.completeTask(task.getId(), task.serialize());
};

export const archive = (task: Task) => {
  task.archive();
  return actions.archiveTask(task.getId(), task.serialize());
};

export const unarchive = (task: Task) => {
  task.unarchive();
  return actions.unarchiveTask(task.getId(), task.serialize());
};

export default {
  create,
  updateTitle,
  toggleStatus,
  archive,
  unarchive,
};
