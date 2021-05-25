import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import TaskRegisterForm from "./TaskRegisterForm";
import store from "../../../states/store";

export default {
  title: "atoms/TaskRegisterForm",
  component: TaskRegisterForm,
} as Meta;

const Template: Story = () => {
  return (
    <Provider store={store}>
      <TaskRegisterForm />
    </Provider>
  );
};

export const index = Template;
