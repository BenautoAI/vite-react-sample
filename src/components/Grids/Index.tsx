import React, { useState } from 'react';
import FeedCard from "../FeedCard";

interface Card {
  id: string;
  title: string;
}

function FeedGrid() {
  const initialCards: Card[] = [
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

  const [cards, setCards] = useState<Card[]>(initialCards);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
    e.preventDefault();
    
    if (!draggedId || draggedId === targetId) {
      setDraggedId(null);
      return;
    }

    const draggedIndex = cards.findIndex(card => card.id === draggedId);
    const targetIndex = cards.findIndex(card => card.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) {
      setDraggedId(null);
      return;
    }

    const newCards = [...cards];
    const draggedCard = newCards[draggedIndex];
    newCards.splice(draggedIndex, 1);
    newCards.splice(targetIndex, 0, draggedCard);

    setCards(newCards);
    setDraggedId(null);
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
          className={draggedId === card.id ? 'opacity-50' : ''}
        >
          <FeedCard 
            id={card.id}
            title={card.title}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </div>
      ))}
    </div>
  );
}

export default FeedGrid;