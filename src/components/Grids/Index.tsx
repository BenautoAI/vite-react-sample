import FeedCard from "../FeedCard";

interface CardData {
  id: string | number;
  title: string;
  image?: string;
  description?: string;
}

interface FeedGridProps {
  cards?: CardData[];
}

function FeedGrid(props: FeedGridProps) {
  const defaultCards: CardData[] = [
    { id: 1, title: "Foto Casa" },
    { id: 2, title: "Foto Casa" },
    { id: 3, title: "Foto Casa" },
    { id: 4, title: "Foto Casa" },
    { id: 5, title: "Foto Casa" },
    { id: 6, title: "Foto Casa" },
    { id: 7, title: "Foto Casa" },
    { id: 8, title: "Foto Casa" },
    { id: 9, title: "Foto Casa" },
  ];

  const cardsToDisplay = props.cards || defaultCards;

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {cardsToDisplay.map((card) => (
        <FeedCard
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>

  );
}

export default FeedGrid;