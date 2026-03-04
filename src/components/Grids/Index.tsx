import FeedCard from "../FeedCard";

interface CardItem {
  title: string;
  description: string;
}

interface FeedGridProps {
  cards: CardItem[];
}

function FeedGrid(props: FeedGridProps) {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {props.cards.map((card, index) => (
        <FeedCard key={index} title={card.title} description={card.description} />
      ))}
    </div>

  );
}

export default FeedGrid;