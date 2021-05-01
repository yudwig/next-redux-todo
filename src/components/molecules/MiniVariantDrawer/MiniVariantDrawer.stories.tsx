import { Meta, Story } from "@storybook/react";
import * as React from "react";
import MiniVariantDrawer from "./MiniVariantDrawer";
import DrawerLinkList from "../../organisms/DrawerLinkList/DrawerLinkList";

export default {
  title: "molecules/MiniVariantDrawer",
  component: MiniVariantDrawer,
  argTypes: {
    open: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <>
      <MiniVariantDrawer {...args}>
        <DrawerLinkList />
      </MiniVariantDrawer>
    </>
  );
};

export const Open = Template.bind({});
Open.args = {
  open: true,
};

export const Close = Template.bind({});
Close.args = {
  open: false,
};
