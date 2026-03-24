import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './index'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    nickname: 'John',
    realname: 'John Doe',
    imageUrl: '/src/assets/photo.png',
    showFollowButton: true,
  },
}

export const WithoutFollowButton: Story = {
  args: {
    nickname: 'Jane',
    realname: 'Jane Smith',
    imageUrl: '/src/assets/photo.png',
    showFollowButton: false,
  },
}
