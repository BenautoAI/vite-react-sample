import { useState } from 'react';
import FeedCard from '../FeedCard';

interface CardItem {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
}

interface CardListProps {
  items: CardItem[];
  onCardClick?: (item: CardItem) => void;
  onItemsReorder?: (items: CardItem[]) => void;
  emptyMessage?: string;
}

function CardList(props: CardListProps) {
  const { items: initialItems, onCardClick, onItemsReorder, emptyMessage = 'No items to display' } = props;
  const [items, setItems] = useState<CardItem[]>(initialItems);
  const [draggedItem, setDraggedItem] = useState<string | number | null>(null);
  const [dragOverItem, setDragOverItem] = useState<string | number | null>(null);

  const handleDragStart = (id: string | number) => {
    setDraggedItem(id);
  };

  const handleDragOver = (id: string | number) => {
    setDragOverItem(id);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverItem(null);
  };

  const handleDrop = (dropId: string | number) => {
    if (draggedItem === null || draggedItem === dropId) {
      handleDragEnd();
      return;
    }

    const draggedIndex = items.findIndex((item) => item.id === draggedItem);
    const dropIndex = items.findIndex((item) => item.id === dropId);

    if (draggedIndex === -1 || dropIndex === -1) {
      handleDragEnd();
      return;
    }

    const newItems = [...items];
    const draggedItemData = newItems[draggedIndex];
    newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedItemData);

    setItems(newItems);
    onItemsReorder?.(newItems);
    handleDragEnd();
  };

  if (items.length === 0) {
    return (
      <div className="
        flex
        items-center
        justify-center
        min-h-64
        bg-gray-50
        rounded-lg
        border
        border-gray-200
      ">
        <p className="text-gray-500 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      gap-4
    ">
      {items.map((item) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(item.id)}
          onDragOver={() => handleDragOver(item.id)}
          onDragLeave={() => setDragOverItem(null)}
          onDrop={() => handleDrop(item.id)}
          onDragEnd={handleDragEnd}
          className={`transition-opacity duration-200 ${
            draggedItem === item.id ? 'opacity-50' : 'opacity-100'
          } ${dragOverItem === item.id && draggedItem !== item.id ? 'ring-2 ring-blue-400' : ''}`}
        >
          <FeedCard
            title={item.title}
            description={item.description}
            image={item.image}
            onClick={() => onCardClick?.(item)}
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
