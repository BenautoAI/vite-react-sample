import { useState } from 'react';
import FeedCard from '../FeedCard';

interface CardData {
  id: string;
  title: string;
}

interface CardListProps {
  initialCards?: CardData[];
}

function CardList({ initialCards = [] }: CardListProps) {
  const defaultCards: CardData[] = [
    { id: '1', title: 'Foto Casa 1' },
    { id: '2', title: 'Foto Casa 2' },
    { id: '3', title: 'Foto Casa 3' },
    { id: '4', title: 'Foto Casa 4' },
    { id: '5', title: 'Foto Casa 5' },
    { id: '6', title: 'Foto Casa 6' },
    { id: '7', title: 'Foto Casa 7' },
    { id: '8', title: 'Foto Casa 8' },
    { id: '9', title: 'Foto Casa 9' },
  ];

  const [cards, setCards] = useState<CardData[]>(
    initialCards.length > 0 ? initialCards : defaultCards
  );
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number, e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newCards = [...cards];
    const draggedCard = newCards[draggedIndex];
    newCards.splice(draggedIndex, 1);
    newCards.splice(dropIndex, 0, draggedCard);

    setCards(newCards);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="
      flex 
      flex-col 
      gap-4
    ">
      {cards.map((card, index) => (
        <div
          key={card.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(index, e)}
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          className={`
            cursor-grab
            active:cursor-grabbing
            transition-all
            duration-200
            ${draggedIndex === index ? 'opacity-50' : ''}
            ${dragOverIndex === index && draggedIndex !== index ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
          `}
        >
          <FeedCard title={card.title} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
