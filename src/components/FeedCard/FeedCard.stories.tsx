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
    title: 'Exploring the Future of Web Design',
  },
};

export const ShortTitle: Story = {
  args: {
    title: 'New Update',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'The Comprehensive Guide to Building Scalable Applications with Modern Architecture Patterns and Best Practices',
  },
};
