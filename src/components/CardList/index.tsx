import FeedCard from "../FeedCard";

interface CardListProps {
  items: string[];
}

function CardList(props: CardListProps) {
  return (
    <div className="
      flex 
      flex-col 
      gap-4"
    >
      {props.items.map((item, index) => (
        <FeedCard key={index} title={item} />
      ))}
    </div>
  );
}

export default CardList;
