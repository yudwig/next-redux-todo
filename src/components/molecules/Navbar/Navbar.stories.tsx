import { Meta, Story } from "@storybook/react";
import Navbar from "./Navbar";

export default {
  title: "molecules/Navbar",
  component: Navbar,
  argTypes: {
    title: {
      defaultValue: "Test Logo",
      control: {
        type: "text",
      },
    },
    onToggleDrawer: {
      action: "clicked",
    },
  },
} as Meta;

const Template: Story = ({ title, onToggleDrawer }) => (
  <Navbar title={title} onToggleDrawer={onToggleDrawer} />
);

export const index = Template;
