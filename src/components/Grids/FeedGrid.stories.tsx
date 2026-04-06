import type { Meta, StoryObj } from '@storybook/react-vite';
import FeedGrid from './Index';

const meta = {
  title: 'Components/FeedGrid',
  component: FeedGrid,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FeedGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: [
      {
        id: '1',
        title: 'Card One',
        description: 'This is the first card in the grid. It demonstrates how cards appear in the 3-column layout.',
      },
      {
        id: '2',
        title: 'Card Two',
        description: 'This is the second card. Notice how the grid distributes cards evenly across three columns.',
      },
      {
        id: '3',
        title: 'Card Three',
        description: 'This is the third card, completing the first row of the grid layout.',
      },
      {
        id: '4',
        title: 'Card Four',
        description: 'This card starts the second row. The grid maintains consistent spacing and alignment.',
      },
      {
        id: '5',
        title: 'Card Five',
        description: 'Each card displays a title and description with consistent styling and dimensions.',
      },
      {
        id: '6',
        title: 'Card Six',
        description: 'The grid demonstrates proper data mapping and component composition across multiple items.',
      },
    ],
  },
};
