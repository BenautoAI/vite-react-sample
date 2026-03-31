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

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <p className="text-sm text-gray-600 mb-2">Default State (Blue, Clickable)</p>
        <FollowButton isLoading={false} isDisabled={false} onClick={() => alert('Follow button clicked')} />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Loading State (Spinner + "Following...")</p>
        <FollowButton isLoading={true} isDisabled={false} onClick={() => {}} />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Disabled State (Grayed Out, Non-Interactive)</p>
        <FollowButton isLoading={false} isDisabled={true} onClick={() => {}} />
      </div>
    </div>
  ),
};

export const Default: Story = {
  args: {
    isLoading: false,
    isDisabled: false,
    onClick: () => alert('Follow button clicked'),
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    isDisabled: false,
    onClick: () => {},
  },
};

export const Disabled: Story = {
  args: {
    isLoading: false,
    isDisabled: true,
    onClick: () => {},
  },
};
