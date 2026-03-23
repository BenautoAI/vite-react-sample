import type { Meta, StoryObj } from '@storybook/react-vite'
import { PropertySearchLanding } from './index'

const meta: Meta<typeof PropertySearchLanding> = {
  title: 'Components/PropertySearchLanding',
  component: PropertySearchLanding,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof PropertySearchLanding>

export const Default: Story = {
  args: {
    activeTab: 'commercial'
  }
}

export const Residential: Story = {
  args: {
    activeTab: 'residential'
  }
}
