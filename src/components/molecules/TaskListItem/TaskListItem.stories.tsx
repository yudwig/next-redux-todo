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
    completed: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    buttonType: {
      control: {
        type: "select",
        labels: {
          archive: "archive",
          unarchive: "unarchive",
        },
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <TaskListItem
    title={args.title}
    completed={args.completed}
    disabled={args.disabled}
    buttonType={args.buttonType}
  />
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
