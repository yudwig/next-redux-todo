import { Meta, Story } from "@storybook/react";
import TaskRegisterForm from "./TaskRegisterForm";

export default {
  title: "organisms/TaskRegisterForm",
  component: TaskRegisterForm,
} as Meta;

const Template: Story = () => {
  return <TaskRegisterForm />;
};

export const index = Template;
