import type { Meta, StoryObj } from '@storybook/react-vite';
import FollowButton from './index';

const meta: Meta<typeof FollowButton> = {
  title: 'Components/FollowButton',
  component: FollowButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FollowButton>;

export const Default: Story = {
  args: {
    isLoading: false,
    isDisabled: false,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    isLoading: false,
    isDisabled: true,
  },
};

export const AllStates: Story = {
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '40px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Default State (Interactive)</h3>
        <FollowButton isLoading={false} isDisabled={false} />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Loading State</h3>
        <FollowButton isLoading={true} isDisabled={false} />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>Disabled State</h3>
        <FollowButton isLoading={false} isDisabled={true} />
      </div>
    </div>
  ),
};
