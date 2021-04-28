import { Meta, Story } from "@storybook/react";
import TaskStatusToggler from "./TaskStatusToggler";

export default {
  title: "atoms/TaskStatusToggler",
  component: TaskStatusToggler,
} as Meta;

const Template: Story = () => <TaskStatusToggler />;
export const index = Template;
