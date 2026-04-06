import FeedCard from "../FeedCard";

interface Card {
  id: string;
  title: string;
  description: string;
}

interface FeedGridProps {
  cards: Card[];
}

function FeedGrid(props: FeedGridProps) {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {props.cards.map((card) => (
        <FeedCard 
          key={card.id}
          title={card.title} 
          description={card.description}
        />
      ))}
    </div>

  );
}

export default FeedGrid;