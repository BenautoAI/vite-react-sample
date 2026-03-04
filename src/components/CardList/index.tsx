import { useState } from "react";
import CardItem from "../CardItem";

interface CardListItem {
  id: string;
  image: string;
  title: string;
}

interface CardListProps {
  items?: CardListItem[];
}

// Mock data for demonstration
const mockData: CardListItem[] = [
  { id: "1", image: "./src/assets/photo.png", title: "Felipe Aguiar" },
  { id: "2", image: "./src/assets/photo.png", title: "Ana Silva" },
  { id: "3", image: "./src/assets/photo.png", title: "Carlos Santos" },
  { id: "4", image: "./src/assets/photo.png", title: "Marina Costa" },
  { id: "5", image: "./src/assets/photo.png", title: "João Oliveira" },
  { id: "6", image: "./src/assets/photo.png", title: "Sofia Lima" },
  { id: "7", image: "./src/assets/photo.png", title: "Pedro Ferreira" },
  { id: "8", image: "./src/assets/photo.png", title: "Lucia Martins" },
  { id: "9", image: "./src/assets/photo.png", title: "Rafael Rocha" },
];

function CardList(props: CardListProps) {
  const initialItems = props.items || mockData;
  const [items, setItems] = useState<CardListItem[]>(initialItems);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [dragOverItemId, setDragOverItemId] = useState<string | null>(null);

  const handleDragStart = (id: string) => {
    setDraggedItemId(id);
  };

  const handleDragEnd = () => {
    setDraggedItemId(null);
    setDragOverItemId(null);
  };

  const handleDragOver = (id: string) => {
    setDragOverItemId(id);
  };

  const handleDragLeave = () => {
    setDragOverItemId(null);
  };

  const handleDrop = (targetId: string) => {
    if (!draggedItemId || draggedItemId === targetId) {
      handleDragEnd();
      return;
    }

    const draggedIndex = items.findIndex((item) => item.id === draggedItemId);
    const targetIndex = items.findIndex((item) => item.id === targetId);

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggedItem);

    setItems(newItems);
    handleDragEnd();
  };

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4
      p-4
      ">
      {items.map((item) => (
        <CardItem 
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          isDragging={draggedItemId === item.id}
          isDragOver={dragOverItemId === item.id}
          onDragStart={() => handleDragStart(item.id)}
          onDragEnd={handleDragEnd}
          onDragOver={() => handleDragOver(item.id)}
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(item.id)}
        />
      ))}
    </div>
  );
}

export default CardList;
