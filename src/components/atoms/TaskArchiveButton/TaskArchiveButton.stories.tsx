import { Meta, Story } from "@storybook/react";
import TaskArchiveButton from "./TaskArchiveButton";

export default {
  title: "atoms/TaskArchiveButton",
  component: TaskArchiveButton,
} as Meta;

const Template: Story = () => <TaskArchiveButton />;

export const index = Template;
