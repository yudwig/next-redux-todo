import actions from "./actions";

export const toggleWidthDrawer = (isNowExpand: boolean) => {
  return isNowExpand ? actions.shrinkDrawer() : actions.expandDrawer();
};

export const toggleOpenDrawer = (isNowOpen: boolean) => {
  return isNowOpen ? actions.closeDrawer() : actions.openDrawer();
};

export const closeDrawer = () => {
  return actions.closeDrawer();
};

export default {
  toggleWidthDrawer,
  toggleOpenDrawer,
  closeDrawer,
};
