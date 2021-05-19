import types from "./types";

export const createTask = (task: any) => ({
  type: types.CREATE_TASK,
  task,
});

export const updateTaskTitle = (id: string, task: any) => ({
  type: types.UPDATE_TASK_TITLE,
  id,
  task,
});

export const completeTask = (id: string, task: any) => ({
  type: types.COMPLETE_TASK,
  id,
  task,
});

export const incompleteTask = (id: string, task: any) => ({
  type: types.INCOMPLETE_TASK,
  id,
  task,
});

export const archiveTask = (id: string, task: any) => ({
  type: types.ARCHIVE_TASK,
  id,
  task,
});

export const unarchiveTask = (id: string, task: any) => ({
  type: types.UNARCHIVE_TASK,
  id,
  task,
});

export default {
  createTask,
  updateTaskTitle,
  completeTask,
  incompleteTask,
  archiveTask,
  unarchiveTask,
};
