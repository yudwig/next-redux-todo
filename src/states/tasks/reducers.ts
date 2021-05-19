import types from "./types";

const update = (state: any, id: string, data: any) => {
  const index = state.findIndex((row: any) => row.id === id);
  if (index < 0) {
    return state.slice();
  }
  const clone = state.slice();
  clone.splice(index, 1, data);
  return clone;
};

const create = (state: any, data: any) => {
  return [...state, data];
};

const commandTypes = {
  create: [types.CREATE_TASK],
  update: [
    types.UPDATE_TASK_TITLE,
    types.UPDATE_TASK_TITLE,
    types.COMPLETE_TASK,
    types.INCOMPLETE_TASK,
    types.ARCHIVE_TASK,
    types.UNARCHIVE_TASK,
  ],
};

const getCommandTypes = (type: string) => {
  if (commandTypes.create.includes(type)) {
    return "create";
  }
  if (commandTypes.update.includes(type)) {
    return "update";
  }
  return "other";
};

const tasks = (state: any, action: any) => {
  switch (getCommandTypes(action.type)) {
    case "create":
      return create(state, action.task);
    case "update":
      return update(state, action.id, action.task);
    default:
      return state ? state.slice() : [];
  }
};

export default tasks;
