import types from "./types";

const update = (state: any, id: string, data: any) => {
  const index = state.findIndex((row: any) => row.id === id);
  if (index < 0) {
    console.log(`reducer: not found task. id: ${id}`);
    return state.slice();
  }

  const clone = state.slice();
  clone.splice(index, 1, data);
  return clone;
};

const create = (state: any, data: any) => {
  return [...state, data];
};

const tasks = (state: any, action: any) => {
  switch (action.type) {
    case types.CREATE_TASK:
      return create(state, action.task);
    case types.UPDATE_TASK_TITLE:
    case types.COMPLETE_TASK:
    case types.INCOMPLETE_TASK:
    case types.ARCHIVE_TASK:
    case types.UNARCHIVE_TASK:
      return update(state, action.id, action.task);
    default:
      return state ? state.slice() : [];
  }
};

export default tasks;
