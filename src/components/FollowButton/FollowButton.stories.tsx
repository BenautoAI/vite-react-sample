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
    onClick: () => console.log('Follow clicked'),
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    isDisabled: false,
    onClick: () => console.log('Follow clicked'),
  },
};

export const Disabled: Story = {
  args: {
    isLoading: false,
    isDisabled: true,
    onClick: () => console.log('Follow clicked'),
  },
};

export const AllStates: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">Default State</h3>
        <FollowButton isLoading={false} isDisabled={false} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">Loading State</h3>
        <FollowButton isLoading={true} isDisabled={false} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">Disabled State</h3>
        <FollowButton isLoading={false} isDisabled={true} />
      </div>
    </div>
  ),
};
