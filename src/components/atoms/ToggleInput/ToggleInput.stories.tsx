import { Meta, Story } from "@storybook/react";
import ToggleInput from "./ToggleInput";

export default {
  title: "atoms/ToggleInput",
  component: ToggleInput,
} as Meta;

const Template: Story = () => (
  <ToggleInput
    onEnter={() => {
      return 0;
    }}
    title="test"
  />
);

export const index = Template;
