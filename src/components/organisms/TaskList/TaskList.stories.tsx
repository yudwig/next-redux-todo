import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import TaskList from "./TaskList";
import configureStore from "../../../states/store";

export default {
  title: "organisms/TaskList",
  component: TaskList,
} as Meta;

const Template: Story = () => {
  const state = {
    tasks: [
      { title: "task 1", status: false },
      { title: "task 2", status: true },
      { title: "task 3", status: false },
    ],
  };

  return (
    <Provider store={configureStore(state)}>
      <TaskList />
    </Provider>
  );
};

export const index = Template;
