import { Meta, Story } from "@storybook/react";
import ArchivedStateButton from "./ArchivedStateButton";

export default {
  title: "atoms/ArchivedStateButton",
  component: ArchivedStateButton,
  argTypes: {
    iconType: {
      control: {
        type: "select",
        labels: {
          archive: "archive",
          unarchive: "unarchive",
        },
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <ArchivedStateButton iconType={args.iconType} />
);
export const Archive = Template.bind({});
Archive.args = {
  iconType: "archive",
};
export const Unarchive = Template.bind({});
Unarchive.args = {
  iconType: "unarchive",
};
