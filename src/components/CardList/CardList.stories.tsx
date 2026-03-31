import type { Meta, StoryObj } from '@storybook/react-vite';
import CardList from './index';

const meta: Meta<typeof CardList> = {
  title: 'Components/CardList',
  component: CardList,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof CardList>;

// Sample data with 9 cards for 3-column grid demonstration
const sampleCards = [
  { id: '1', title: 'Foto Casa 1' },
  { id: '2', title: 'Foto Casa 2' },
  { id: '3', title: 'Foto Casa 3' },
  { id: '4', title: 'Foto Casa 4' },
  { id: '5', title: 'Foto Casa 5' },
  { id: '6', title: 'Foto Casa 6' },
  { id: '7', title: 'Foto Casa 7' },
  { id: '8', title: 'Foto Casa 8' },
  { id: '9', title: 'Foto Casa 9' },
];

export const Default: Story = {
  args: {
    items: sampleCards,
    columns: 3,
  },
};
