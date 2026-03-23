import type { Meta, StoryObj } from '@storybook/react-vite';
import HeroSection from './index';

const meta: Meta<typeof HeroSection> = {
  title: 'Components/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    headline: "Let's",
    subheadline: "Discover residential properties",
  },
};

export const CustomHeadline: Story = {
  args: {
    headline: "Welcome",
    subheadline: "Explore amazing properties",
  },
};

export const LongContent: Story = {
  args: {
    headline: "Find Your Perfect Home",
    subheadline: "Browse through our extensive collection of residential and commercial properties",
  },
};
