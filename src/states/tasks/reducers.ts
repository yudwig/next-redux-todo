import types from "./types";

const tasks = (state: any, action: any) => {
  let index: number;
  switch (action.type) {
    case types.CREATE_TASK:
      return [...state, action.task];
    case types.UPDATE_TASK:
      index = state.findIndex((task: any) => task.id === action.task.id);
      if (index < 0) {
        return state.slice();
      }
      return state.slice().splice(index, 1, action.task);
    default:
      return state ? state.slice() : [];
  }
};

export default tasks;
