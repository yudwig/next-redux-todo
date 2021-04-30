import { Meta, Story } from "@storybook/react";
import DrawerLinkItem from "./DrawerLinkItem";

export default {
  title: "atoms/DrawerLinkItem",
  component: DrawerLinkItem,
  argTypes: {
    text: {
      defaultValue: "Link 1",
    },
    icon: {
      defaultValue: "icon",
    },
    uri: {
      defaultValue: "/link1",
    },
  },
} as Meta;

const Template: Story = ({ text, icon, uri }) => (
  <DrawerLinkItem text={text} icon={icon} uri={uri} />
);

export const index = Template;
