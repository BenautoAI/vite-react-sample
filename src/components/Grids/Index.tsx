import { useState } from "react";
import FeedCard from "../FeedCard";

interface CardData {
  id: string | number;
  title: string;
  image?: string;
  description?: string;
}

interface FeedGridProps {
  cards?: CardData[];
  onCardsReorder?: (reorderedCards: CardData[]) => void;
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

  const [cards, setCards] = useState<CardData[]>(props.cards || defaultCards);
  const [draggedId, setDraggedId] = useState<string | number | null>(null);
  const [dragOverId, setDragOverId] = useState<string | number | null>(null);

  const handleDragStart = (id: string | number) => {
    setDraggedId(id);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDragOverId(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, id: string | number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverId(id);
  };

  const handleDragLeave = () => {
    setDragOverId(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string | number) => {
    e.preventDefault();
    
    if (draggedId === null || draggedId === targetId) {
      setDragOverId(null);
      return;
    }

    const draggedIndex = cards.findIndex(card => card.id === draggedId);
    const targetIndex = cards.findIndex(card => card.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) {
      setDragOverId(null);
      return;
    }

    const newCards = [...cards];
    const [draggedCard] = newCards.splice(draggedIndex, 1);
    newCards.splice(targetIndex, 0, draggedCard);

    setCards(newCards);
    props.onCardsReorder?.(newCards);
    setDragOverId(null);
  };

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {cards.map((card) => (
        <FeedCard
          key={card.id}
          id={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
          draggable={true}
          onDragStart={() => handleDragStart(card.id)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(e, card.id)}
          onDrop={(e) => handleDrop(e, card.id)}
          isDragOver={dragOverId === card.id}
        />
      ))}
    </div>

  );
}

export default FeedGrid;
