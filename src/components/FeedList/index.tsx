import React, { useState } from 'react';
import FeedCard from "../FeedCard";

interface CardItem {
  id: string;
  title: string;
}

function FeedList() {
  const [cards, setCards] = useState<CardItem[]>([
    { id: '1', title: 'Foto Casa' },
    { id: '2', title: 'Foto Casa' },
    { id: '3', title: 'Foto Casa' },
    { id: '4', title: 'Foto Casa' },
    { id: '5', title: 'Foto Casa' },
    { id: '6', title: 'Foto Casa' },
    { id: '7', title: 'Foto Casa' },
    { id: '8', title: 'Foto Casa' },
    { id: '9', title: 'Foto Casa' },
  ]);
  
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    setDragOverId(id);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      setDragOverId(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
    e.preventDefault();
    setDragOverId(null);

    if (draggedId === null || draggedId === targetId) {
      setDraggedId(null);
      return;
    }

    const draggedIndex = cards.findIndex(card => card.id === draggedId);
    const targetIndex = cards.findIndex(card => card.id === targetId);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      const newCards = [...cards];
      const [draggedCard] = newCards.splice(draggedIndex, 1);
      newCards.splice(targetIndex, 0, draggedCard);
      setCards(newCards);
    }

    setDraggedId(null);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDragOverId(null);
  };

  return (
    <div className="flex flex-col gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          draggable
          onDragStart={(e) => handleDragStart(e, card.id)}
          onDragOver={handleDragOver}
          onDragEnter={(e) => handleDragEnter(e, card.id)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, card.id)}
          onDragEnd={handleDragEnd}
          className={`
            transition-all duration-200 cursor-move
            ${draggedId === card.id ? 'opacity-50' : ''}
            ${dragOverId === card.id ? 'scale-105 bg-blue-50' : ''}
          `}
        >
          <FeedCard title={card.title} />
        </div>
      ))}
    </div>
  );
}

export default FeedList;
