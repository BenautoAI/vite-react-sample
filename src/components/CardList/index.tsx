import React, { useState } from 'react';
import FeedCard from "../FeedCard";

interface CardData {
  id: string | number;
  title: string;
  description?: string;
}

interface CardListProps {
  cards: CardData[];
  columns?: number;
  onCardsReorder?: (reorderedCards: CardData[]) => void;
}

function CardList(props: CardListProps) {
  const columns = props.columns || 3;
  const [cards, setCards] = useState<CardData[]>(props.cards);
  const [draggedId, setDraggedId] = useState<string | number | null>(null);
  const [dragOverId, setDragOverId] = useState<string | number | null>(null);
  
  const gridColsMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };
  
  const gridColsClass = gridColsMap[columns] || 'grid-cols-3';

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, cardId: string | number) => {
    setDraggedId(cardId);
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('cardId', String(cardId));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, cardId: string | number) => {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
    if (cardId !== draggedId) {
      setDragOverId(cardId);
    }
  };

  const handleDragLeave = () => {
    setDragOverId(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropCardId: string | number) => {
    e.preventDefault();
    
    if (draggedId === null || draggedId === dropCardId) {
      setDraggedId(null);
      setDragOverId(null);
      return;
    }

    const draggedIndex = cards.findIndex((card) => card.id === draggedId);
    const dropIndex = cards.findIndex((card) => card.id === dropCardId);

    if (draggedIndex !== -1 && dropIndex !== -1) {
      const newCards = [...cards];
      const [draggedCard] = newCards.splice(draggedIndex, 1);
      newCards.splice(dropIndex, 0, draggedCard);
      
      setCards(newCards);
      if (props.onCardsReorder) {
        props.onCardsReorder(newCards);
      }
    }

    setDraggedId(null);
    setDragOverId(null);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDragOverId(null);
  };

  return (
    <div className={`
      grid 
      ${gridColsClass}
      gap-4
    `}>
      {cards.map((card) => (
        <div
          key={card.id}
          className={`
            transition-all
            duration-200
            ${dragOverId === card.id && draggedId !== card.id ? 'opacity-75 scale-105' : ''}
          `}
          onDragOver={(e) => handleDragOver(e, card.id)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, card.id)}
        >
          <FeedCard
            title={card.title}
            description={card.description}
            isDragging={draggedId === card.id}
            onDragStart={(e) => handleDragStart(e, card.id)}
            draggableId={String(card.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
