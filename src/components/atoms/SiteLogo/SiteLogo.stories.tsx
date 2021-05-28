import { Meta, Story } from "@storybook/react";
import SiteLogo from "./SiteLogo";

export default {
  title: "atoms/SiteLogo",
  component: SiteLogo,
} as Meta;

const Template: Story = () => <SiteLogo title="Next Redux Todo" />;

export const index = Template;
