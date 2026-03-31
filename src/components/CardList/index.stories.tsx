import type { Meta, StoryObj } from '@storybook/react-vite';
import CardList from './index';

const meta: Meta<typeof CardList> = {
  title: 'Components/CardList',
  component: CardList,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'First Card',
      },
      {
        id: '2',
        title: 'Second Card',
      },
      {
        id: '3',
        title: 'Third Card',
      },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Single Item',
      },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Item 1',
      },
      {
        id: '2',
        title: 'Item 2',
      },
      {
        id: '3',
        title: 'Item 3',
      },
      {
        id: '4',
        title: 'Item 4',
      },
      {
        id: '5',
        title: 'Item 5',
      },
    ],
  },
};
