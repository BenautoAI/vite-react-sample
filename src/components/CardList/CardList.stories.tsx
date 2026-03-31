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

// Sample mock data
const sampleItems = [
  {
    id: '1',
    title: 'Card One',
    description: 'This is the first card with a brief description.',
  },
  {
    id: '2',
    title: 'Card Two',
    description: 'This is the second card with more details to show text wrapping behavior.',
  },
  {
    id: '3',
    title: 'Card Three',
    description: 'The third card in our grid layout.',
  },
  {
    id: '4',
    title: 'Card Four',
    description: 'A fourth card to fill out the grid nicely.',
  },
  {
    id: '5',
    title: 'Card Five',
    description: 'The fifth card in the collection.',
  },
  {
    id: '6',
    title: 'Card Six',
    description: 'Completing the second row with this card.',
  },
  {
    id: '7',
    title: 'Card Seven',
    description: 'The seventh card in our display.',
  },
  {
    id: '8',
    title: 'Card Eight',
    description: 'The eighth card showing consistent layout.',
  },
  {
    id: '9',
    title: 'Card Nine',
    description: 'The ninth and final card in this example.',
  },
];

export const GridLayout: Story = {
  args: {
    items: sampleItems,
    variant: 'grid',
    columns: 3,
  },
};

export const ListLayout: Story = {
  args: {
    items: sampleItems.slice(0, 4),
    variant: 'list',
  },
};

export const TwoColumnGrid: Story = {
  args: {
    items: sampleItems.slice(0, 6),
    variant: 'grid',
    columns: 2,
  },
};

export const SingleColumnList: Story = {
  args: {
    items: sampleItems.slice(0, 3),
    variant: 'grid',
    columns: 1,
  },
};
