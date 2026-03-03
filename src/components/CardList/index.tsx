import { useState } from 'react';
import FeedCard from '../FeedCard';

interface CardData {
  id: string;
  title: string;
}

interface CardListProps {
  cards: CardData[];
}

function CardList(props: CardListProps) {
  const [cards, setCards] = useState<CardData[]>(props.cards);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      const newCards = [...cards];
      const [draggedCard] = newCards.splice(draggedIndex, 1);
      newCards.splice(dropIndex, 0, draggedCard);
      setCards(newCards);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {cards.map((card, index) => (
        <div
          key={card.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          className={`
            cursor-grab
            active:cursor-grabbing
            transition-all
            duration-200
            ${draggedIndex === index ? 'opacity-50' : 'opacity-100'}
            ${dragOverIndex === index && draggedIndex !== index ? 'ring-2 ring-blue-500 ring-offset-2 rounded-lg' : ''}
          `}
        >
          <FeedCard title={card.title} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
