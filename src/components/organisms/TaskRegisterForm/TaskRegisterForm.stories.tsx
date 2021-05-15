import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import TaskRegisterForm from "./TaskRegisterForm";
import configureStore from "../../../states/store";
import mock from "../../../models/Task/Mock";

export default {
  title: "atoms/TaskRegisterForm",
  component: TaskRegisterForm,
} as Meta;

const Template: Story = () => {
  const state = {
    tasks: mock.getTaskList(),
  };

  return (
    <Provider store={configureStore(state)}>
      <TaskRegisterForm />
    </Provider>
  );
};

export const index = Template;
