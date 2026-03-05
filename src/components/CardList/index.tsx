import { useState } from "react";
import FeedCard from "../FeedCard";

interface CardItem {
  id: string;
  title: string;
}

interface CardListProps {
  items: CardItem[];
  onReorder?: (reorderedItems: CardItem[]) => void;
}

function CardList(props: CardListProps) {
  const [items, setItems] = useState<CardItem[]>(props.items);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newItems = [...items];
    const draggedItem = newItems[draggedIndex];
    newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);

    setItems(newItems);
    props.onReorder?.(newItems);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className="
      flex
      flex-col
      gap-4
      w-full
    ">
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          className={`transition-all duration-200 ${
            draggedIndex === index ? "opacity-50" : ""
          } ${
            dragOverIndex === index
              ? "ring-2 ring-blue-500 ring-inset rounded-lg"
              : ""
          }`}
        >
          <FeedCard title={item.title} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
