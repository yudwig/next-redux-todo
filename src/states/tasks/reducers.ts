import types from "./types";
import Task from "../../models/Task/entity";

const tasks = (state: any, action: any) => {
  switch (action.type) {
    case types.ADD_TASK:
      return [...state, new Task({ title: action.title })];
    default:
      return state ? state.slice() : [];
  }
};

export default tasks;
