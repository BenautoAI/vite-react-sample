import { useState, DragEvent } from 'react';

interface CardItem {
  id: string | number;
  title: string;
  description: string;
}

interface CardListProps {
  cards: CardItem[];
  columns?: number;
  onCardsReorder?: (reorderedCards: CardItem[]) => void;
}

function CardList(props: CardListProps) {
  const { cards: initialCards, columns = 3, onCardsReorder } = props;
  const [cards, setCards] = useState<CardItem[]>(initialCards);
  const [draggedId, setDraggedId] = useState<string | number | null>(null);
  const [dragOverId, setDragOverId] = useState<string | number | null>(null);
  
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns as 1 | 2 | 3 | 4] || 'grid-cols-3';

  const handleDragStart = (e: DragEvent<HTMLDivElement>, cardId: string | number) => {
    setDraggedId(cardId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, cardId: string | number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverId(cardId);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, targetId: string | number) => {
    e.preventDefault();
    
    if (draggedId === null || draggedId === targetId) {
      setDraggedId(null);
      setDragOverId(null);
      return;
    }

    const draggedIndex = cards.findIndex((card) => card.id === draggedId);
    const targetIndex = cards.findIndex((card) => card.id === targetId);

    const newCards = Array.from(cards);
    const [draggedCard] = newCards.splice(draggedIndex, 1);
    newCards.splice(targetIndex, 0, draggedCard);

    setCards(newCards);
    onCardsReorder?.(newCards);
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
      w-full
    `}>
      {cards.map((card) => (
        <div
          key={card.id}
          draggable
          onDragStart={(e) => handleDragStart(e, card.id)}
          onDragOver={(e) => handleDragOver(e, card.id)}
          onDrop={(e) => handleDrop(e, card.id)}
          onDragEnd={handleDragEnd}
          className={`
            bg-white 
            rounded-lg 
            shadow-md 
            h-96
            p-4
            hover:shadow-lg
            transition-all
            duration-300
            cursor-move
            ${draggedId === card.id ? 'opacity-50' : 'opacity-100'}
            ${dragOverId === card.id && draggedId !== card.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
          "
        >
          <h2 className="text-lg font-medium text-gray-900">
            {card.title}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
