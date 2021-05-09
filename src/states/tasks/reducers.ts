import types from "./types";

const tasks = (state: any, action: any) => {
  switch (action.type) {
    case types.ADD_TASK:
      return [...state, { title: action.title, status: false }];
    default:
      return state ? state.slice() : [];
  }
};

export default tasks;
