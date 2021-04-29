import { Meta, Story } from "@storybook/react";
import Layout from "./Layout";

export default {
  title: "templates/Layout",
  component: Layout,
} as Meta;

const Template: Story = () => <Layout />;

export const index = Template;
