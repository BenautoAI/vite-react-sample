import { useState } from 'react';
import FeedCard from "../FeedCard";

interface CardData {
  title: string;
}

interface CardListProps {
  cards: CardData[];
}

function CardList(props: CardListProps) {
  const [cards, setCards] = useState<CardData[]>(props.cards);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (event: React.DragEvent, index: number) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    setHoveredIndex(index);
  };

  const handleDragLeave = () => {
    setHoveredIndex(null);
  };

  const handleDrop = (event: React.DragEvent, index: number) => {
    event.preventDefault();
    
    if (draggedIndex === null || draggedIndex === index) {
      setDraggedIndex(null);
      setHoveredIndex(null);
      return;
    }

    const newCards = [...cards];
    const draggedCard = newCards[draggedIndex];
    
    // Remove dragged card from old position
    newCards.splice(draggedIndex, 1);
    
    // Insert at new position
    const insertIndex = draggedIndex < index ? index - 1 : index;
    newCards.splice(insertIndex, 0, draggedCard);
    
    setCards(newCards);
    setDraggedIndex(null);
    setHoveredIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setHoveredIndex(null);
  };

  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
          className={`
            transition-all duration-200 cursor-move
            ${draggedIndex === index ? 'opacity-50' : ''}
            ${hoveredIndex === index && draggedIndex !== index ? 'transform scale-105 bg-blue-50 rounded-lg' : ''}
          `}
        >
          <FeedCard title={card.title} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
