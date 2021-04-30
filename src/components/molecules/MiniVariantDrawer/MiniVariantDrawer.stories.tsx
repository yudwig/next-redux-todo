import { Meta, Story } from "@storybook/react";
import { List } from "@material-ui/core";
import * as React from "react";
import MiniVariantDrawer from "./MiniVariantDrawer";
import DrawerLinkItem from "../../atoms/DrawerLinkItem/DrawerLinkItem";

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
        <List>
          <DrawerLinkItem text="test" icon="icon" uri="uri" />
          <DrawerLinkItem text="test" icon="icon" uri="uri" />
          <DrawerLinkItem text="test" icon="icon" uri="uri" />
        </List>
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
