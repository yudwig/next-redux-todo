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
    status: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <TaskListItem title={args.title} status={args.status} />
);

export const Active = Template.bind({});
Active.args = {
  title: "Active Task",
  status: false,
};

export const Done = Template.bind({});
Done.args = {
  title: "Done Task",
  status: true,
};
