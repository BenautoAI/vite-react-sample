import FeedCard from "../FeedCard";

interface CardItem {
  id: string;
  title: string;
}

interface CardListProps {
  items: CardItem[];
}

function CardList(props: CardListProps) {
  return (
    <div className="
      flex
      flex-col
      gap-4
      w-full
    ">
      {props.items.map((item) => (
        <FeedCard key={item.id} title={item.title} />
      ))}
    </div>
  );
}

export default CardList;
