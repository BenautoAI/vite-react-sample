import { useState } from 'react';
import FeedCard from "../FeedCard";

interface CardItem {
  id: string;
  title: string;
}

function FeedGrid() {
  const initialCards: CardItem[] = [
    { id: '1', title: 'Foto Casa' },
    { id: '2', title: 'Foto Casa' },
    { id: '3', title: 'Foto Casa' },
    { id: '4', title: 'Foto Casa' },
    { id: '5', title: 'Foto Casa' },
    { id: '6', title: 'Foto Casa' },
    { id: '7', title: 'Foto Casa' },
    { id: '8', title: 'Foto Casa' },
    { id: '9', title: 'Foto Casa' },
  ];

  const [cards, setCards] = useState<CardItem[]>(initialCards);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDraggedItem(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
    e.preventDefault();
    
    if (!draggedItem || draggedItem === targetId) {
      setDraggedItem(null);
      return;
    }

    const draggedIndex = cards.findIndex(card => card.id === draggedItem);
    const targetIndex = cards.findIndex(card => card.id === targetId);

    const newCards = [...cards];
    const [movedCard] = newCards.splice(draggedIndex, 1);
    newCards.splice(targetIndex, 0, movedCard);

    setCards(newCards);
    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {cards.map((card) => (
        <div
          key={card.id}
          draggable
          onDragStart={(e) => handleDragStart(e, card.id)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, card.id)}
          onDragEnd={handleDragEnd}
          className={`
            transition-opacity 
            duration-200 
            cursor-move
            ${draggedItem === card.id ? 'opacity-50' : 'opacity-100'}
          `}
        >
          <FeedCard title={card.title} />
        </div>
      ))}
    </div>

  );
}

export default FeedGrid;
