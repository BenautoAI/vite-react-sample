import type { Meta, StoryObj } from '@storybook/react-vite';
import FollowButton from './index';

const meta: Meta<typeof FollowButton> = {
  title: 'Components/FollowButton',
  component: FollowButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FollowButton>;

export const Default: Story = {
  args: {
    isLoading: false,
    isDisabled: false,
    label: 'Follow',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    isDisabled: false,
    label: 'Follow',
  },
};

export const Disabled: Story = {
  args: {
    isLoading: false,
    isDisabled: true,
    label: 'Follow',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className='flex flex-col gap-12 items-center p-8'>
      <div className='flex flex-col items-center gap-4 w-96'>
        <h3 className='text-lg font-bold text-gray-900'>Default State</h3>
        <p className='text-sm text-gray-600 text-center'>Normal button state with gradient background</p>
        <FollowButton isLoading={false} isDisabled={false} label='Follow' />
      </div>
      <div className='flex flex-col items-center gap-4 w-96'>
        <h3 className='text-lg font-bold text-gray-900'>Loading State</h3>
        <p className='text-sm text-gray-600 text-center'>Shows spinner and "Loading..." text while processing</p>
        <FollowButton isLoading={true} isDisabled={false} label='Follow' />
      </div>
      <div className='flex flex-col items-center gap-4 w-96'>
        <h3 className='text-lg font-bold text-gray-900'>Disabled State</h3>
        <p className='text-sm text-gray-600 text-center'>Reduced opacity and disabled cursor</p>
        <FollowButton isLoading={false} isDisabled={true} label='Follow' />
      </div>
    </div>
  ),
};
