import { Meta, Story } from "@storybook/react";
import { useSelector } from "react-redux";
import TaskList from "./TaskList";
import selectors from "../../../states/tasks/selectors";

export default {
  title: "organisms/TaskList",
  component: TaskList,
} as Meta;

const Template: Story = () => {
  const tasks = useSelector(selectors.getInboxTasks) || [];
  return <TaskList tasks={tasks} />;
};

export const index = Template;
