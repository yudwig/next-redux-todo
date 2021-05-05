import types from "./types";

export const addTask = (title: string) => ({
  type: types.ADD_TASK,
  title,
});

export default {
  addTask,
};
