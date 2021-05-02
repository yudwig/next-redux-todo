import { Meta, Story } from "@storybook/react";
import TaskStatusToggler from "./TaskStatusToggler";

export default {
  title: "atoms/TaskStatusToggler",
  component: TaskStatusToggler,
  argTypes: {
    status: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story = (args) => <TaskStatusToggler status={args.status} />;
export const Active = Template.bind({});
Active.args = {
  status: false,
};
export const Done = Template.bind({});
Done.args = {
  status: true,
};
