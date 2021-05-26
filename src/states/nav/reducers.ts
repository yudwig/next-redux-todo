import types from "./types";

const nav = (state: any, action: any) => {
  switch (action.type) {
    case types.OPEN_DRAWER:
      return { ...state, isOpenDrawer: true };
    case types.CLOSE_DRAWER:
      return { ...state, isOpenDrawer: false };
    case types.EXPAND_DRAWER:
      return { ...state, isExpandDrawer: true };
    case types.SHRINK_DRAWER:
      return { ...state, isExpandDrawer: false };
    default:
      return { ...state };
  }
};

export default nav;
