import { Meta, Story } from "@storybook/react";
import TaskStatusIndicator from "./TaskStatusIndicator";

export default {
  title: "atoms/TaskStatusIndicator",
  component: TaskStatusIndicator,
  argTypes: {
    status: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story = (args) => <TaskStatusIndicator status={args.status} />;
export const Active = Template.bind({});
Active.args = {
  status: false,
};
export const Done = Template.bind({});
Done.args = {
  status: true,
};
