import { Meta, Story } from "@storybook/react";
import TaskRegisterForm from "./TaskRegisterForm";

export default {
  title: "atoms/TaskRegisterForm",
  component: TaskRegisterForm,
} as Meta;

const Template: Story = () => <TaskRegisterForm />;

export const index = Template;
