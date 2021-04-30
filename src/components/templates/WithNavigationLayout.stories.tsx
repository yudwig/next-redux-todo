import { Meta, Story } from "@storybook/react";
import WithNavigationLayout from "./WithNavigationLayout";

export default {
  title: "templates/WithNavigationLayout",
  component: WithNavigationLayout,
} as Meta;

const Template: Story = () => <WithNavigationLayout />;

export const index = Template;
