import type { Meta, StoryObj } from '@storybook/react-vite'
import HeroSection from './index'

const meta: Meta<typeof HeroSection> = {
  title: 'Components/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof HeroSection>

export const Default: Story = {
  args: {
    heading: 'Welcome to Our Platform',
    subtitle: 'Build amazing experiences with our powerful tools and intuitive interface',
    ctaText: 'Get Started',
    onCtaClick: () => {
      console.log('CTA button clicked!')
    },
  },
}
