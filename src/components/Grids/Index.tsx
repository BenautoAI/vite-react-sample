import FeedCard from "../FeedCard";

interface CardItem {
  id: string | number;
  title: string;
  description?: string;
}

interface FeedGridProps {
  items: CardItem[];
}

function FeedGrid(props: FeedGridProps) {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {props.items.map((item) => (
        <FeedCard key={item.id} title={item.title} description={item.description} />
      ))}
    </div>

  );
}

export default FeedGrid;