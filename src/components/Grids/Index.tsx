import { useState } from "react";
import FeedCard from "../FeedCard";

interface CardItem {
  title: string;
  description: string;
  id?: string;
}

interface FeedGridProps {
  cards: CardItem[];
}

function FeedGrid(props: FeedGridProps) {
  const [cards, setCards] = useState<CardItem[]>(
    props.cards.map((card, index) => ({
      ...card,
      id: card.id || `card-${index}`,
    }))
  );
  
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const handleDragStart = (id: string) => (e: React.DragEvent<HTMLDivElement>) => {
    setDraggedId(id);
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("cardId", id);
    }
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDragOverId(null);
  };

  const handleDragOver = (id: string) => (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = "move";
    }
    setDragOverId(id);
  };

  const handleDrop = (targetId: string) => (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const sourceId = e.dataTransfer?.getData("cardId");
    if (!sourceId || sourceId === targetId) {
      setDragOverId(null);
      return;
    }

    const sourceIndex = cards.findIndex((card) => card.id === sourceId);
    const targetIndex = cards.findIndex((card) => card.id === targetId);

    if (sourceIndex === -1 || targetIndex === -1) {
      setDragOverId(null);
      return;
    }

    const newCards = [...cards];
    const [movedCard] = newCards.splice(sourceIndex, 1);
    newCards.splice(targetIndex, 0, movedCard);

    setCards(newCards);
    setDragOverId(null);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          onDragOver={handleDragOver(card.id!)}
          onDrop={handleDrop(card.id!)}
          className={`transition-all duration-200 ${
            dragOverId === card.id && draggedId !== card.id
              ? "scale-105 ring-2 ring-blue-400 ring-opacity-50"
              : ""
          }`}
        >
          <FeedCard
            title={card.title}
            description={card.description}
            isDragging={draggedId === card.id}
            onDragStart={handleDragStart(card.id!)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver(card.id!)}
            onDrop={handleDrop(card.id!)}
          />
        </div>
      ))}
    </div>
  );
}

export default FeedGrid;
