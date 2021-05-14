import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import TaskList from "./TaskList";
import configureStore from "../../../states/store";
import mock from "../../../models/Task/mock";

export default {
  title: "organisms/TaskList",
  component: TaskList,
} as Meta;

const Template: Story = () => {
  const state = {
    tasks: mock.getTaskList(),
  };

  return (
    <Provider store={configureStore(state)}>
      <TaskList />
    </Provider>
  );
};

export const index = Template;
