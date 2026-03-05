import FeedCard from '../FeedCard';

interface CardItem {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
}

interface CardListProps {
  items: CardItem[];
  onCardClick?: (item: CardItem) => void;
  emptyMessage?: string;
}

function CardList(props: CardListProps) {
  const { items, onCardClick, emptyMessage = 'No items to display' } = props;

  if (items.length === 0) {
    return (
      <div className="
        flex
        items-center
        justify-center
        min-h-64
        bg-gray-50
        rounded-lg
        border
        border-gray-200
      ">
        <p className="text-gray-500 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-4
    ">
      {items.map((item) => (
        <FeedCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          onClick={() => onCardClick?.(item)}
        />
      ))}
    </div>
  );
}

export default CardList;
