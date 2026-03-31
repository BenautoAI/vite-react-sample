import FeedCard from '../FeedCard';

interface CardsListProps {
  items: Array<{ title: string; description?: string }>;
  columns?: number;
  gap?: string;
}

function CardsList(props: CardsListProps) {
  const columns = props.columns ?? 3;
  const gap = props.gap ?? 'gap-4';

  return (
    <div className="p-6 min-h-screen">
      <div className={`
        grid 
        grid-cols-${columns} 
        ${gap}
      `}>
        {props.items.map((item, index) => (
          <FeedCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsList;
