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
  },
} as Meta;

const Template: Story = (args) => <StatusIndicator status={args.status} />;
export const Active = Template.bind({});
Active.args = {
  status: false,
};
export const Done = Template.bind({});
Done.args = {
  status: true,
};
