import Card from '../Card';

interface ListItem {
  id: string;
  title: string;
  description: string;
  avatar: string;
}

interface CardListProps {
  items?: ListItem[];
}

function CardList(props: CardListProps) {
  // Sample data - displayed by default
  const defaultItems: ListItem[] = [
    {
      id: '1',
      title: 'Design System',
      description: 'Create a comprehensive design system with reusable components for modern web applications.',
      avatar: './src/assets/photo.png'
    },
    {
      id: '2',
      title: 'React Best Practices',
      description: 'Learn the latest React patterns and hooks for building scalable applications.',
      avatar: './src/assets/photo.png'
    },
    {
      id: '3',
      title: 'TypeScript Guide',
      description: 'Master TypeScript with practical examples and real-world use cases.',
      avatar: './src/assets/photo.png'
    },
    {
      id: '4',
      title: 'Tailwind CSS Tips',
      description: 'Discover utility-first CSS techniques for rapid UI development.',
      avatar: './src/assets/photo.png'
    },
    {
      id: '5',
      title: 'Component Library',
      description: 'Build your own component library with proper documentation and testing.',
      avatar: './src/assets/photo.png'
    }
  ];

  const itemsToDisplay = props.items || defaultItems;

  return (
    <div className="
      w-full
      max-w-2xl
      mx-auto
      p-4
    ">
      <div className="
        space-y-4
      ">
        {itemsToDisplay.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            avatar={item.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;
