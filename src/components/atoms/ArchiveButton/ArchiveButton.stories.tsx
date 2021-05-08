import { Meta, Story } from "@storybook/react";
import ArchiveButton from "./ArchiveButton";

export default {
  title: "atoms/ArchiveButton",
  component: ArchiveButton,
} as Meta;

const Template: Story = () => <ArchiveButton />;

export const index = Template;
