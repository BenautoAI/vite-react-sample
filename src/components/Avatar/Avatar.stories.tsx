import type { Meta, StoryObj } from '@storybook/react-vite';
import Avatar from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#242424' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#ffffff', padding: '40px', display: 'inline-block', borderRadius: '12px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    nickname: 'MobPsycho',
    realname: 'Shigeo Kageyama',
  },
};

export const WithCustomName: Story = {
  args: {
    nickname: 'ReigerX',
    realname: 'John Doe',
  },
};
