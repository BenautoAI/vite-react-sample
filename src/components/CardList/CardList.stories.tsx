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

export const Default: Story = {
  args: {
    items: [
      { id: 1, title: 'Foto Casa 1' },
      { id: 2, title: 'Foto Casa 2' },
      { id: 3, title: 'Foto Casa 3' },
      { id: 4, title: 'Foto Casa 4' },
    ],
  },
};

export const SingleCard: Story = {
  args: {
    items: [
      { id: 1, title: 'Single Card' },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
