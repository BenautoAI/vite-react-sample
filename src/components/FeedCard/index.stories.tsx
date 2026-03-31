import type { Meta, StoryObj } from '@storybook/react-vite';
import FeedCard from './index';

const meta: Meta<typeof FeedCard> = {
  title: 'Components/FeedCard',
  component: FeedCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FeedCard>;

export const Default: Story = {
  args: {
    title: 'Sample Feed Card',
  },
};

export const WithLongTitle: Story = {
  args: {
    title: 'This is a much longer title for the feed card to test text wrapping and overflow handling',
  },
};
