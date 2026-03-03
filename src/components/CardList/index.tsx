import { useState } from 'react';
import FeedCard from "../FeedCard";

interface CardData {
  title: string;
  id?: string;
}

interface CardListProps {
  cards: CardData[];
  onChange?: (reorderedCards: CardData[]) => void;
}

function CardList(props: CardListProps) {
  const [items, setItems] = useState<CardData[]>(props.cards);
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

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newItems = [...items];
    const draggedItem = newItems[draggedIndex];
    
    // Remove from original position
    newItems.splice(draggedIndex, 1);
    // Insert at new position
    newItems.splice(dropIndex, 0, draggedItem);
    
    setItems(newItems);
    setDraggedIndex(null);
    setDragOverIndex(null);

    if (props.onChange) {
      props.onChange(newItems);
    }
  };

  return (
    <div className="
      flex 
      flex-col 
      gap-4"
    >
      {items.map((card, index) => (
        <div 
          key={card.id || index}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
          className={`
            transition-all
            duration-200
            ${dragOverIndex === index && draggedIndex !== index ? 'border-t-4 border-blue-400 pt-2' : ''}
          `}
        >
          <FeedCard 
            title={card.title}
            isDragging={draggedIndex === index}
            onDragStart={(e) => {
              handleDragStart(index);
              e.dataTransfer.effectAllowed = 'move';
            }}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
