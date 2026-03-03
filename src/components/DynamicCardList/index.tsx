import { useState } from 'react';
import FeedCard from "../FeedCard";

interface CardData {
  id?: string | number;
  title: string;
  description?: string;
}

interface DynamicCardListProps {
  cards: CardData[];
  onCardsReorder?: (reorderedCards: CardData[]) => void;
}

function DynamicCardList(props: DynamicCardListProps) {
  const [cards, setCards] = useState<CardData[]>(props.cards);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number, e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (targetIndex: number, e: React.DragEvent) => {
    e.preventDefault();
    setDragOverIndex(null);

    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const newCards = [...cards];
    const draggedCard = newCards[draggedIndex];
    newCards.splice(draggedIndex, 1);
    newCards.splice(targetIndex, 0, draggedCard);

    setCards(newCards);
    setDraggedIndex(null);

    if (props.onCardsReorder) {
      props.onCardsReorder(newCards);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
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
          key={card.id || index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(index, e)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(index, e)}
          onDragEnd={handleDragEnd}
          className={`
            transition-all 
            duration-200
            ${
              draggedIndex === index 
                ? 'opacity-50' 
                : ''
            }
            ${
              dragOverIndex === index && draggedIndex !== index
                ? 'ring-2 ring-blue-500'
                : ''
            }
          `}
        >
          <FeedCard title={card.title} />
        </div>
      ))}
    </div>
  );
}

export default DynamicCardList;
