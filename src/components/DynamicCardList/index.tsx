import FeedCard from "../FeedCard";

interface CardData {
  title: string;
  description?: string;
}

interface DynamicCardListProps {
  cards: CardData[];
}

function DynamicCardList(props: DynamicCardListProps) {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {props.cards.map((card, index) => (
        <FeedCard key={index} title={card.title} />
      ))}
    </div>
  );
}

export default DynamicCardList;
