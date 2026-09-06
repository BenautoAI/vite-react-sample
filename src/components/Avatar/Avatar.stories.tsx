import type { Meta, StoryObj } from '@storybook/react-vite';
import Avatar from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    nickname: '@Felipao__DIO🚀',
    realname: 'Felipe Aguiar',
    photoSrc: '/src/assets/photo.png',
  },
};

export const WithCustomImage: Story = {
  args: {
    nickname: '@JohnDoe',
    realname: 'John Doe',
    photoSrc: '/src/assets/photo.png',
  },
};
