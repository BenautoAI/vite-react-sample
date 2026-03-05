import React, { useState } from 'react';
import AvatarCard from '../AvatarCard';

interface CardData {
  id: string;
  nickname: string;
  realname: string;
  imageUrl?: string;
}

interface AvatarCardListProps {
  cards: CardData[];
}

function AvatarCardList(props: AvatarCardListProps) {
  const [cards, setCards] = useState<CardData[]>(props.cards);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('cardId', id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverId(id);
  };

  const handleDragLeave = () => {
    setDragOverId(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
    e.preventDefault();
    setDragOverId(null);

    if (!draggedId || draggedId === targetId) {
      setDraggedId(null);
      return;
    }

    const draggedIndex = cards.findIndex((card) => card.id === draggedId);
    const targetIndex = cards.findIndex((card) => card.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) {
      setDraggedId(null);
      return;
    }

    const newCards = [...cards];
    const [draggedCard] = newCards.splice(draggedIndex, 1);
    newCards.splice(targetIndex, 0, draggedCard);

    setCards(newCards);
    setDraggedId(null);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDragOverId(null);
  };

  return (
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-6 
      w-full
    ">
      {cards.map((card) => (
        <div
          key={card.id}
          onDragOver={(e) => handleDragOver(e, card.id)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, card.id)}
          className={`transition-all duration-200 ${
            dragOverId === card.id && draggedId !== card.id
              ? 'opacity-50 scale-95'
              : draggedId === card.id
              ? 'opacity-50'
              : 'opacity-100'
          }`}
        >
          <AvatarCard
            id={card.id}
            nickname={card.nickname}
            realname={card.realname}
            imageUrl={card.imageUrl}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, card.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default AvatarCardList;
