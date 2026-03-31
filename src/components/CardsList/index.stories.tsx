import type { Meta, StoryObj } from '@storybook/react-vite';
import CardsList from './index';

const meta: Meta<typeof CardsList> = {
  title: 'Components/CardsList',
  component: CardsList,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof CardsList>;

const sampleItems = [
  {
    title: 'React Fundamentals',
    description: 'Learn the core concepts of React including components, props, and state management.',
  },
  {
    title: 'Advanced TypeScript',
    description: 'Master TypeScript with generics, decorators, and advanced type systems.',
  },
  {
    title: 'Tailwind CSS Mastery',
    description: 'Create beautiful UIs quickly with utility-first CSS framework.',
  },
  {
    title: 'Web Performance',
    description: 'Optimize your web applications for speed and efficiency.',
  },
  {
    title: 'Testing Best Practices',
    description: 'Write robust tests for your applications with Jest and React Testing Library.',
  },
  {
    title: 'State Management with Redux',
    description: 'Manage complex application state patterns with Redux Toolkit.',
  },
  {
    title: 'API Integration',
    description: 'Connect your frontend to backend services with proper error handling.',
  },
  {
    title: 'UI/UX Design Principles',
    description: 'Create intuitive and user-friendly interfaces following design best practices.',
  },
  {
    title: 'DevOps and Deployment',
    description: 'Deploy applications to production using modern CI/CD pipelines.',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    columns: 3,
    gap: 'gap-4',
  },
};

export const NineItems: Story = {
  args: {
    items: sampleItems,
    columns: 3,
    gap: 'gap-4',
  },
};

export const TwoColumns: Story = {
  args: {
    items: sampleItems.slice(0, 6),
    columns: 2,
    gap: 'gap-4',
  },
};

export const SingleColumn: Story = {
  args: {
    items: sampleItems.slice(0, 4),
    columns: 1,
    gap: 'gap-4',
  },
};
