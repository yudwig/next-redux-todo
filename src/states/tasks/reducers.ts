import types from "./types";
import { Factory } from "../../models/Task/Factory";

const tasks = (state: any, action: any) => {
  switch (action.type) {
    case types.ADD_TASK:
      return [...state, Factory.create({ title: action.title }).serialize()];
    default:
      return state ? state.slice() : [];
  }
};

export default tasks;
