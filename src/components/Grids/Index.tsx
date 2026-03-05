import FeedCard from "../FeedCard";

interface CardItem {
  title: string;
  description?: string;
}

interface FeedGridProps {
  cards: CardItem[];
}

function FeedGrid({ cards }: FeedGridProps) {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {cards.map((card, index) => (
        <FeedCard key={index} title={card.title} description={card.description} />
      ))}
    </div>

  );
}

export default FeedGrid;