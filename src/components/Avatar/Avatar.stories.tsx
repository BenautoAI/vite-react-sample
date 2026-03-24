import type { Meta, StoryObj } from '@storybook/react-vite'
import Avatar from './index'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    nickname: 'John Doe',
    realname: 'Jonathan Michael Doe',
  },
}

export const WithCustomImage: Story = {
  args: {
    nickname: 'Jane Smith',
    realname: 'Jane Elizabeth Smith',
  },
}
