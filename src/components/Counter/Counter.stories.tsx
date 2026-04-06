import type { Meta, StoryObj } from "@storybook/react-vite";
import Counter from "./index";

const meta: Meta<typeof Counter> = {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    initialValue: 0,
  },
};

export const WithInitialValue: Story = {
  args: {
    initialValue: 10,
  },
};
