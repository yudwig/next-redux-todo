import { Meta, Story } from "@storybook/react";
import HamburgerButton from "./HamburgerButton";

export default {
  title: "atoms/HamburgerButton",
  component: HamburgerButton,
} as Meta;

const Template: Story = () => <HamburgerButton />;

export const index = Template;
