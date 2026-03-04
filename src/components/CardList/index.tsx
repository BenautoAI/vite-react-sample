import FeedCard from "../FeedCard";

interface CardData {
  title: string;
}

interface CardListProps {
  cards: CardData[];
}

function CardList(props: CardListProps) {
  return (
    <div className="
      flex 
      flex-col 
      gap-4
    ">
      {props.cards.map((card, index) => (
        <FeedCard key={index} title={card.title} />
      ))}
    </div>
  );
}

export default CardList;
