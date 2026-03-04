import FeedCard from "../FeedCard";

interface CardListProps {
  items?: Array<{ id: string; title: string }>;
}

function CardList({ items }: CardListProps) {
  // Default items if none provided
  const cardItems = items || [
    { id: "1", title: "Foto Casa" },
    { id: "2", title: "Foto Casa" },
    { id: "3", title: "Foto Casa" },
    { id: "4", title: "Foto Casa" },
    { id: "5", title: "Foto Casa" },
    { id: "6", title: "Foto Casa" },
  ];

  return (
    <div className="
      flex
      flex-col
      gap-4
      overflow-y-auto
    ">
      {cardItems.map((item) => (
        <FeedCard key={item.id} title={item.title} />
      ))}
    </div>
  );
}

export default CardList;
