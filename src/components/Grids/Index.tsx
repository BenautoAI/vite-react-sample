import { useState } from 'react';
import FeedCard from "../FeedCard";

interface CardItem {
  id: string | number;
  title: string;
  description?: string;
}

interface FeedGridProps {
  items: CardItem[];
}

function FeedGrid(props: FeedGridProps) {
  const [items, setItems] = useState<CardItem[]>(props.items);
  const [draggedItem, setDraggedItem] = useState<CardItem | null>(null);
  const [draggedOverItem, setDraggedOverItem] = useState<CardItem | null>(null);

  const handleDragStart = (item: CardItem) => {
    setDraggedItem(item);
  };

  const handleDragOver = (item: CardItem) => {
    if (draggedItem && draggedItem.id !== item.id) {
      setDraggedOverItem(item);
    }
  };

  const handleDragLeave = () => {
    setDraggedOverItem(null);
  };

  const handleDrop = (item: CardItem) => {
    if (!draggedItem || draggedItem.id === item.id) {
      setDraggedItem(null);
      setDraggedOverItem(null);
      return;
    }

    const draggedIndex = items.findIndex((i) => i.id === draggedItem.id);
    const targetIndex = items.findIndex((i) => i.id === item.id);

    const newItems = [...items];
    [newItems[draggedIndex], newItems[targetIndex]] = [
      newItems[targetIndex],
      newItems[draggedIndex],
    ];

    setItems(newItems);
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {items.map((item) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(item)}
          onDragOver={() => handleDragOver(item)}
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(item)}
          onDragEnd={handleDragEnd}
          className={`transition-all duration-200 ${
            draggedItem?.id === item.id ? 'opacity-50' : ''
          } ${
            draggedOverItem?.id === item.id ? 'scale-105 ring-2 ring-blue-400' : ''
          }`}
        >
          <FeedCard title={item.title} description={item.description} />
        </div>
      ))}
    </div>
  );
}

export default FeedGrid;