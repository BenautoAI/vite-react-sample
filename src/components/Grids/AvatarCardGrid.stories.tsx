import type { Meta, StoryObj } from '@storybook/react-vite';
import AvatarCardGrid from './AvatarCardGrid';
import photo from '../../assets/photo.png';

const meta: Meta<typeof AvatarCardGrid> = {
  title: 'Components/AvatarCardGrid',
  component: AvatarCardGrid,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof AvatarCardGrid>;

export const Default: Story = {
  args: {},
};

export const WithCustomCards: Story = {
  args: {
    cards: [
      {
        title: "Custom Card 1",
        description: "This is a custom card with different content and styling",
        avatarImage: photo,
      },
      {
        title: "Custom Card 2",
        description: "Another custom card to showcase the grid layout",
        avatarImage: photo,
      },
    ],
  },
};
