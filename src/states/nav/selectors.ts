export interface ViewObject {
  isOpenDrawer: boolean;
  isExpandDrawer: boolean;
}

const getNav = (state: any): ViewObject => {
  return {
    isOpenDrawer: state.nav.isOpenDrawer,
    isExpandDrawer: state.nav.isExpandDrawer,
  };
};

export default {
  getNav,
};
