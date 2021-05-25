import { configureStore } from "@reduxjs/toolkit";
import tasks from "./tasks/reducers";
import mock from "../models/Task/Mock";

const preloadedState = {
  tasks: mock.getSerializedTaskList(),
};

export default configureStore({
  reducer: {
    tasks,
  },
  preloadedState,
  devTools: process.env.NODE_ENV !== "production",
});
