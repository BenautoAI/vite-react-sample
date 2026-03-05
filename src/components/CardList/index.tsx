import FeedCard from "../FeedCard";

interface CardListItem {
  title: string;
  description?: string;
}

interface CardListProps {
  items: CardListItem[];
}

function CardList(props: CardListProps) {
  return (
    <div className="
      grid 
      grid-cols-1 
      gap-4"
    >
      {props.items.map((item, index) => (
        <FeedCard 
          key={index} 
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default CardList;
