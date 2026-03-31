import FeedCard from '../FeedCard';

interface CardItem {
  id: number;
  title: string;
}

interface CardListProps {
  items?: CardItem[];
}

function CardList({ items = [] }: CardListProps) {
  return (
    <div className="
      flex 
      flex-col 
      gap-4
      w-full
    ">
      {items.length > 0 ? (
        items.map((item) => (
          <FeedCard key={item.id} title={item.title} />
        ))
      ) : (
        <p className="text-gray-500 text-center py-8">No cards to display</p>
      )}
    </div>
  );
}

export default CardList;
