import { Meta, Story } from "@storybook/react";
import StatusIndicator from "./StatusIndicator";

export default {
  title: "atoms/StatusIndicator",
  component: StatusIndicator,
  argTypes: {
    status: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <StatusIndicator status={args.status} disabled={args.disabled} />
);
export const Active = Template.bind({});
Active.args = {
  status: false,
  disabled: false,
};
export const Done = Template.bind({});
Done.args = {
  status: true,
  disabled: false,
};
