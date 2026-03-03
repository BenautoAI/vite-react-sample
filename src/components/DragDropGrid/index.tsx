import { useState } from 'react';
import FeedCard from '../FeedCard';

interface CardData {
  id: string;
  title: string;
}

function DragDropGrid() {
  const initialCards: CardData[] = [
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

  const [cards, setCards] = useState<CardData[]>(initialCards);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const handleDragStart = (id: string) => {
    setDraggedId(id);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDragOverId(null);
  };

  const handleDragOver = (id: string, e: React.DragEvent) => {
    e.preventDefault();
    setDragOverId(id);
  };

  const handleDragLeave = () => {
    setDragOverId(null);
  };

  const handleDrop = (id: string, e: React.DragEvent) => {
    e.preventDefault();
    setDragOverId(null);

    if (draggedId === null || draggedId === id) return;

    const draggedIndex = cards.findIndex((card) => card.id === draggedId);
    const targetIndex = cards.findIndex((card) => card.id === id);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newCards = [...cards];
    const [draggedCard] = newCards.splice(draggedIndex, 1);
    newCards.splice(targetIndex, 0, draggedCard);

    setCards(newCards);
    setDraggedId(null);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          draggable
          onDragStart={() => handleDragStart(card.id)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(card.id, e)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(card.id, e)}
          className={`
            transition-all
            duration-200
            ${draggedId === card.id ? 'opacity-50 scale-95' : ''}
            ${dragOverId === card.id && draggedId !== card.id ? 'ring-2 ring-blue-500 scale-105' : ''}
          `}
        >
          <FeedCard title={card.title} />
        </div>
      ))}
    </div>
  );
}

export default DragDropGrid;
