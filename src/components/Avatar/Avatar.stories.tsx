import type { Meta, StoryObj } from '@storybook/react-vite';
import Avatar from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#ffffff' }],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px', background: '#ffffff' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    nickname: '@username',
    realname: 'Real Name',
  },
};

export const WithCustomName: Story = {
  args: {
    nickname: '@mob_psycho',
    realname: 'Shigeo Kageyama',
  },
};
