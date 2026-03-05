import FeedCard from "../FeedCard";

interface Card {
  id: string;
  title: string;
}

interface FeedGridProps {
  cards?: Card[];
}

function FeedGrid({ cards }: FeedGridProps) {
  // Default cards if none provided
  const defaultCards: Card[] = [
    { id: '1', title: 'Foto Casa' },
    { id: '2', title: 'Foto Casa' },
    { id: '3', title: 'Foto Casa' },
    { id: '4', title: 'Foto Casa' },
    { id: '5', title: 'Foto Casa' },
    { id: '6', title: 'Foto Casa' },
    { id: '7', title: 'Foto Casa' },
    { id: '8', title: 'Foto Casa' },
    { id: '9', title: 'Foto Casa' },
  ];

  const cardList = cards || defaultCards;

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {cardList.map((card) => (
        <FeedCard key={card.id} title={card.title} />
      ))}
    </div>
  );
}

export default FeedGrid;