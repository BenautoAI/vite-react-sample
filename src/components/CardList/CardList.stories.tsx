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
      { id: '1', title: 'Card 1', description: 'This is the first card with a description' },
      { id: '2', title: 'Card 2', description: 'This is the second card with a description' },
      { id: '3', title: 'Card 3', description: 'This is the third card with a description' },
      { id: '4', title: 'Card 4', description: 'This is the fourth card with a description' },
      { id: '5', title: 'Card 5', description: 'This is the fifth card with a description' },
      { id: '6', title: 'Card 6', description: 'This is the sixth card with a description' },
    ],
    columns: 3,
  },
};

export const TwoColumns: Story = {
  args: {
    items: [
      { id: '1', title: 'Card 1', description: 'This is the first card' },
      { id: '2', title: 'Card 2', description: 'This is the second card' },
      { id: '3', title: 'Card 3', description: 'This is the third card' },
      { id: '4', title: 'Card 4', description: 'This is the fourth card' },
    ],
    columns: 2,
  },
};

export const SingleColumn: Story = {
  args: {
    items: [
      { id: '1', title: 'Single Column Card', description: 'This card spans the full width' },
      { id: '2', title: 'Second Card', description: 'Another card below the first' },
    ],
    columns: 1,
  },
};

export const WithoutDescriptions: Story = {
  args: {
    items: [
      { id: '1', title: 'Card 1' },
      { id: '2', title: 'Card 2' },
      { id: '3', title: 'Card 3' },
    ],
    columns: 3,
  },
};
