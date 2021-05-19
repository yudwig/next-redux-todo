import actions from "./actions";
import { Factory } from "../../models/Task/Factory";
import Task from "../../models/Task/Task";

export const create = (title: string) => {
  const task = Factory.create({ title });
  return actions.createTask(task.serialize());
};

export const updateTitle = (task: Task, title: string) => {
  task.changeTitle(title);
  return actions.updateTaskTitle(task.getId(), task.serialize());
};

export const toggleStatus = (task: Task) => {
  if (task.isCompleted()) {
    task.incomplete();
    console.log("toggle status incomplete.", task);
    return actions.incompleteTask(task.getId(), task.serialize());
  }
  console.log("toggle status complete.", task);
  task.complete();
  return actions.completeTask(task.getId(), task.serialize());
};

export const archive = (task: Task) => {
  if (task.isArchived()) {
    task.unarchive();
    return actions.unarchiveTask(task.getId(), task.serialize());
  }

  task.archive();
  return actions.archiveTask(task.getId(), task.serialize());
};

export default {
  create,
  updateTitle,
  toggleStatus,
  archive,
};
