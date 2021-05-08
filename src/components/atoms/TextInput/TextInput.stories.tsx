import { Meta, Story } from "@storybook/react";
import TextInput from "./TextInput";

export default {
  title: "TextInput",
  component: TextInput,
} as Meta;

const Template: Story = () => <TextInput />;

export const index = Template;
