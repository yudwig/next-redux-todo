import { Meta, Story } from "@storybook/react";
import Navigation from "./Navigation";

export default {
  title: "organisms/Navigation",
  component: Navigation,
} as Meta;

const Template: Story = () => <Navigation />;

export const index = Template;
