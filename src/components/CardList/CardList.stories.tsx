import type { Meta, StoryObj } from '@storybook/react-vite'
import CardList from './index'

const meta: Meta<typeof CardList> = {
  title: 'Components/CardList',
  component: CardList,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof CardList>

// Sample data with diverse titles and descriptions
const sampleCards = [
  {
    title: 'React Fundamentals',
    description: 'Learn the core concepts of React including components, hooks, and state management.',
  },
  {
    title: 'TypeScript Guide',
    description: 'Master TypeScript to write type-safe JavaScript applications with better developer experience.',
  },
  {
    title: 'Tailwind CSS',
    description: 'Build beautiful user interfaces quickly with utility-first CSS framework.',
  },
  {
    title: 'Vite Bundler',
    description: 'Experience lightning-fast development with Vite, the next-generation frontend build tool.',
  },
  {
    title: 'Web Accessibility',
    description: 'Create inclusive web experiences that work for everyone with WCAG compliance.',
  },
  {
    title: 'Advanced Patterns',
    description: 'Explore advanced React patterns and best practices for scalable applications.',
  },
]

export const Default: Story = {
  args: {
    cards: sampleCards,
    columns: 3,
    gap: 4,
  },
}

export const TwoColumns: Story = {
  args: {
    cards: sampleCards,
    columns: 2,
    gap: 4,
  },
}

export const FourColumns: Story = {
  args: {
    cards: sampleCards,
    columns: 4,
    gap: 4,
  },
}
