import { Meta, Story } from "@storybook/react";
import TaskList from "./TaskList";

export default {
  title: "organisms/TaskList",
  component: TaskList,
} as Meta;

const Template: Story = () => <TaskList />;

export const index = Template;
