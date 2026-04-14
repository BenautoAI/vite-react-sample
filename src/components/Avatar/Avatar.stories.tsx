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
    nickname: '@john_doe',
    realname: 'John Doe',
  },
};

export const LongName: Story = {
  args: {
    nickname: '@user_with_very_long_nickname',
    realname: 'User With Very Long Real Name',
  },
};
