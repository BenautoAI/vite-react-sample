import type { Meta, StoryObj } from '@storybook/react-vite';
import CardList from './index';

const meta = {
  title: 'Components/CardList',
  component: CardList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomItems: Story = {
  args: {
    items: [
      { id: '1', title: 'Custom House 1' },
      { id: '2', title: 'Custom House 2' },
      { id: '3', title: 'Custom House 3' },
    ],
  },
};
