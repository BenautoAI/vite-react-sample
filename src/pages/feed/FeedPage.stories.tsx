import type { Meta, StoryObj } from '@storybook/react-vite'
import FeedPage from './index'

const meta: Meta<typeof FeedPage> = {
  title: 'Pages/FeedPage',
  component: FeedPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof FeedPage>

export const Default: Story = {}
