import types from "./types";

export const openDrawer = () => ({
  type: types.OPEN_DRAWER,
});

export const closeDrawer = () => ({
  type: types.CLOSE_DRAWER,
});

export const shrinkDrawer = () => ({
  type: types.SHRINK_DRAWER,
});

export const expandDrawer = () => ({
  type: types.EXPAND_DRAWER,
});

export default {
  openDrawer,
  closeDrawer,
  shrinkDrawer,
  expandDrawer,
};
