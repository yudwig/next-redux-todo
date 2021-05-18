import types from "./types";

export const create = (task: any) => ({
  type: types.CREATE_TASK,
  task,
});

export const update = (id: string, task: any) => ({
  type: types.UPDATE_TASK,
  task,
});

export default {
  create,
  update,
};
