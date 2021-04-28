import { Meta, Story } from "@storybook/react";
import MiniVariantDrawer from "./MiniVariantDrawer";

export default {
  title: "molecules/MiniVariantDrawer",
  component: MiniVariantDrawer,
} as Meta;

const Template: Story = () => <MiniVariantDrawer />;

export const index = Template;
