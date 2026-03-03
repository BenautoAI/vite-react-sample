import { useState } from 'react';
import FeedCard from "../FeedCard";

interface CardListItem {
  id: string;
  title: string;
}

interface CardListProps {
  items: CardListItem[];
  onItemsChange?: (items: CardListItem[]) => void;
}

function CardsList(props: CardListProps) {
  const [items, setItems] = useState<CardListItem[]>(props.items);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    setDragOverIndex(null);

    if (draggedIndex === null || draggedIndex === dropIndex) {
      return;
    }

    const newItems = [...items];
    const draggedItem = newItems[draggedIndex];

    newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);

    setItems(newItems);
    setDraggedIndex(null);

    if (props.onItemsChange) {
      props.onItemsChange(newItems);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
          className={`
            transition-all 
            duration-200 
            cursor-grab 
            active:cursor-grabbing
            ${draggedIndex === index ? 'opacity-50' : 'opacity-100'}
            ${dragOverIndex === index ? 'scale-105 border-l-4 border-blue-500 pl-2' : ''}
          `}
        >
          <FeedCard title={item.title} />
        </div>
      ))}
    </div>
  );
}

export default CardsList;
