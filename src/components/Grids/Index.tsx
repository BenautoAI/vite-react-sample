import { useDragDrop } from '../../hooks/useDragDrop';
import FeedCard from "../FeedCard";

interface Card {
  id: string;
  title: string;
}

interface FeedGridProps {
  cards?: Card[];
  onCardsReorder?: (cards: Card[]) => void;
}

function FeedGrid({ cards, onCardsReorder }: FeedGridProps) {
  // Default cards if none provided
  const defaultCards: Card[] = [
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

  const cardList = cards || defaultCards;
  const {
    items,
    draggedItem,
    draggedOverItem,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
  } = useDragDrop(cardList);

  // Notify parent when cards are reordered
  if (onCardsReorder) {
    onCardsReorder(items);
  }

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {items.map((card) => (
        <FeedCard
          key={card.id}
          id={card.id}
          title={card.title}
          isDragging={draggedItem?.id === card.id}
          isDraggedOver={draggedOverItem?.id === card.id}
          onDragStart={() => handleDragStart(card)}
          onDragOver={() => handleDragOver(card)}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
}

export default FeedGrid;