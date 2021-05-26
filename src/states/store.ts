import { configureStore } from "@reduxjs/toolkit";
import tasks from "./tasks/reducers";
import nav from "./nav/reducers";
import mock from "../models/Task/Mock";

const preloadedState = {
  tasks: mock.getSerializedTaskList(),
  nav: {
    isOpenDrawer: false,
  },
};

export default configureStore({
  reducer: {
    tasks,
    nav,
  },
  preloadedState,
  devTools: process.env.NODE_ENV !== "production",
});
