import { Meta, Story } from "@storybook/react";
import TaskListItem from "./TaskListItem";

export default {
  title: "molecules/TaskListItem",
  component: TaskListItem,
  argTypes: {
    title: {
      defaultValue: "this is task",
      control: {
        type: "text",
      },
    },
  },
} as Meta;

// const Template: Story = ({ ...args }) => <TaskListItem {...args} />;
const Template: Story = ({ title }) => <TaskListItem title={title} />;

export const index = Template;
