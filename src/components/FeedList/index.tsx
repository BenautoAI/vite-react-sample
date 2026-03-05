import { useState } from "react";
import FeedCard from "../FeedCard";

interface DraggedItem {
  index: number;
  startX: number;
  startY: number;
}

function FeedList() {
  const [items, setItems] = useState([
    { id: 1, title: "Foto Casa" },
    { id: 2, title: "Foto Casa" },
    { id: 3, title: "Foto Casa" },
    { id: 4, title: "Foto Casa" },
    { id: 5, title: "Foto Casa" },
    { id: 6, title: "Foto Casa" },
    { id: 7, title: "Foto Casa" },
    { id: 8, title: "Foto Casa" },
    { id: 9, title: "Foto Casa" },
  ]);

  const [draggedItem, setDraggedItem] = useState<DraggedItem | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    setDraggedItem({
      index,
      startX: e.clientX,
      startY: e.clientY,
    });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropIndex: number
  ) => {
    e.preventDefault();
    setDragOverIndex(null);

    if (!draggedItem || draggedItem.index === dropIndex) {
      setDraggedItem(null);
      return;
    }

    const newItems = [...items];
    const draggedItemContent = newItems[draggedItem.index];
    newItems.splice(draggedItem.index, 1);
    newItems.splice(dropIndex, 0, draggedItemContent);
    setItems(newItems);
    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
          className={`transition-all duration-200 ${
            draggedItem?.index === index
              ? "opacity-50 scale-95"
              : dragOverIndex === index
              ? "scale-105 ring-2 ring-blue-400 rounded-lg"
              : ""
          }`}
        >
          <FeedCard title={item.title} />
        </div>
      ))}
    </div>
  );
}

export default FeedList;
