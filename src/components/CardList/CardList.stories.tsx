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

// Sample card data with 6 items as specified in guidance
const sampleCards = [
  {
    id: '1',
    title: 'Beautiful Design',
    description: 'A modern and elegant card layout with clean spacing and shadows.',
  },
  {
    id: '2',
    title: 'Responsive Grid',
    description: 'The grid automatically adjusts to display items in 3 columns with consistent gaps.',
  },
  {
    id: '3',
    title: 'Hover Effects',
    description: 'Cards feature smooth shadow transitions on hover for better interactivity.',
  },
  {
    id: '4',
    title: 'Flexible Layout',
    description: 'Switch between grid and list layouts with a simple prop configuration.',
  },
  {
    id: '5',
    title: 'Tailwind Styling',
    description: 'Built with Tailwind CSS utility classes for a professional appearance.',
  },
  {
    id: '6',
    title: 'Sample Data',
    description: 'This card demonstrates how the component handles multiple items with descriptions.',
  },
];

export const GridLayout: Story = {
  args: {
    items: sampleCards,
    layout: 'grid',
    columns: 3,
  },
};

export const ListLayout: Story = {
  args: {
    items: sampleCards,
    layout: 'list',
  },
};

export const TwoColumnGrid: Story = {
  args: {
    items: sampleCards,
    layout: 'grid',
    columns: 2,
  },
};

export const SingleColumnList: Story = {
  args: {
    items: sampleCards.slice(0, 3),
    layout: 'grid',
    columns: 1,
  },
};
