import type { Meta, StoryObj } from '@storybook/react-vite';
import FeedList from './index';

const meta: Meta<typeof FeedList> = {
  title: 'Components/FeedList',
  component: FeedList,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof FeedList>;

export const Default: Story = {
  args: {
    items: [
      { title: 'First Feed Item' },
      { title: 'Second Feed Item with a longer title to test wrapping' },
      { title: 'Third Feed Item' },
    ],
  },
};

export const MultipleFeedItems: Story = {
  args: {
    items: [
      { title: 'Item 1: React News' },
      { title: 'Item 2: TypeScript Tips' },
      { title: 'Item 3: Vite Configuration' },
      { title: 'Item 4: Tailwind Tricks' },
      { title: 'Item 5: Component Design' },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ title: 'Single Feed Card' }],
  },
};
