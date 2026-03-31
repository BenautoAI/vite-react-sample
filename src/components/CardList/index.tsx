import FeedCard from '../FeedCard';

interface CardItem {
  id: string;
  title: string;
}

interface CardListProps {
  items: CardItem[];
  columns?: number;
  gap?: string;
}

function CardList(props: CardListProps) {
  const columns = props.columns ?? 3;
  const gap = props.gap ?? 'gap-4';
  
  // Map column count to Tailwind classes for proper purging
  const gridColsClass = columns === 1 ? 'grid-cols-1' : columns === 2 ? 'grid-cols-2' : 'grid-cols-3';

  return (
    <div className={`
      grid 
      ${gridColsClass}
      ${gap}
    `}>
      {props.items.map((item) => (
        <FeedCard key={item.id} title={item.title} />
      ))}
    </div>
  );
}

export default CardList;
