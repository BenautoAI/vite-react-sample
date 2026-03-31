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
    isFollowing: false,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    isDisabled: false,
    isFollowing: false,
  },
};

export const Disabled: Story = {
  args: {
    isLoading: false,
    isDisabled: true,
    isFollowing: false,
  },
};

export const Following: Story = {
  args: {
    isLoading: false,
    isDisabled: false,
    isFollowing: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Default (Blue Follow button)</h3>
        <FollowButton isLoading={false} isDisabled={false} isFollowing={false} />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Loading (Spinner with Loading... text)</h3>
        <FollowButton isLoading={true} isDisabled={false} isFollowing={false} />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Disabled (Grayed out, unclickable)</h3>
        <FollowButton isLoading={false} isDisabled={true} isFollowing={false} />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Following (Gray Following button)</h3>
        <FollowButton isLoading={false} isDisabled={false} isFollowing={true} />
      </div>
    </div>
  ),
};
