import { Meta, Story } from "@storybook/react";
import CloseButton from "./CloseButton";

export default {
  title: "atoms/CloseButton",
  component: CloseButton,
} as Meta;

const Template: Story = () => <CloseButton />;

export const index = Template;
