import FeedCard from "../FeedCard";

interface CardListItem {
  title: string;
}

interface CardListProps {
  items: CardListItem[];
}

function CardsList(props: CardListProps) {
  return (
    <div className="
      flex 
      flex-col 
      gap-4"
    >
      {props.items.map((item, index) => (
        <FeedCard key={index} title={item.title} />
      ))}
    </div>
  );
}

export default CardsList;
