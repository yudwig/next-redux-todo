import { Meta, Story } from "@storybook/react";
import TaskRegisterForm from "./TaskRegisterForm";

export default {
  title: "TaskRegisterForm",
  component: TaskRegisterForm,
} as Meta;

const Template: Story = () => <TaskRegisterForm />;

export const Primary = Template;
