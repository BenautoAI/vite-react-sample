import type { Meta, StoryObj } from "@storybook/react-vite";
import AgentMemoryHub from "./index";

const meta: Meta<typeof AgentMemoryHub> = {
  title: "Pages/AgentMemoryHub",
  component: AgentMemoryHub,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AgentMemoryHub>;

export const Default: Story = {};
