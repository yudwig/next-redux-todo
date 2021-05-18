import types from "./types";

export const createTask = (task: any) => ({
  type: types.CREATE_TASK,
  task,
});

export const updateTask = (id: string, task: any) => ({
  type: types.UPDATE_TASK,
  task,
});

export default {
  createTask,
  updateTask,
};
