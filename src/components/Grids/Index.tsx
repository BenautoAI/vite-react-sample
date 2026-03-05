import { useState } from "react";
import FeedCard from "../FeedCard";

interface CardItem {
  id: string;
  title: string;
  description: string;
}

interface FeedGridProps {
  cards: CardItem[];
  onReorder?: (reorderedCards: CardItem[]) => void;
}

function FeedGrid(props: FeedGridProps) {
  const [cards, setCards] = useState<CardItem[]>(props.cards);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDragOverIndex(null);
      return;
    }

    const newCards = [...cards];
    const draggedCard = newCards[draggedIndex];
    newCards.splice(draggedIndex, 1);
    newCards.splice(dropIndex, 0, draggedCard);

    setCards(newCards);
    props.onReorder?.(newCards);
    setDragOverIndex(null);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragLeave={handleDragLeave}
          className={`transition-opacity duration-200 ${dragOverIndex === index ? 'opacity-40' : ''}`}
        >
          <FeedCard 
            title={card.title} 
            description={card.description}
            onDragStart={() => handleDragStart(index)}
            onDragEnd={handleDragEnd}
            isDragging={draggedIndex === index}
          />
        </div>
      ))}
    </div>

  );
}

export default FeedGrid;
