import type { Meta, StoryObj } from '@storybook/react-vite';
import FeedGrid from './Index';

const meta: Meta<typeof FeedGrid> = {
  title: 'Components/FeedGrid',
  component: FeedGrid,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FeedGrid>;

export const Default: Story = {};
