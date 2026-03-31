import FeedCard from "../FeedCard";

interface CardItem {
  title: string;
}

interface FeedListProps {
  items: CardItem[];
}

function FeedList(props: FeedListProps) {
  return (
    <div className="
      flex
      flex-col
      gap-4
    ">
      {props.items.map((item, index) => (
        <FeedCard key={index} title={item.title} />
      ))}
    </div>
  );
}

export default FeedList;
