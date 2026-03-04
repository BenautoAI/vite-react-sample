import { useState } from 'react';
import FeedCard from "../FeedCard";

interface CardItem {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
}

interface FeedGridProps {
  items?: CardItem[];
  onItemsChange?: (items: CardItem[]) => void;
}

const DEFAULT_ITEMS: CardItem[] = [
  {
    id: 1,
    title: "Foto Casa",
    description: "A beautiful house view captured in daylight hours.",
    image: "./src/assets/photo.png"
  },
  {
    id: 2,
    title: "Foto Casa",
    description: "Interior design of modern residential space.",
    image: "./src/assets/photo.png"
  },
  {
    id: 3,
    title: "Foto Casa",
    description: "Architectural details and outdoor landscaping.",
    image: "./src/assets/photo.png"
  },
  {
    id: 4,
    title: "Foto Casa",
    description: "Evening lighting and facade design.",
    image: "./src/assets/photo.png"
  },
  {
    id: 5,
    title: "Foto Casa",
    description: "Garden and outdoor entertaining areas.",
    image: "./src/assets/photo.png"
  },
  {
    id: 6,
    title: "Foto Casa",
    description: "Modern minimalist interior design.",
    image: "./src/assets/photo.png"
  },
  {
    id: 7,
    title: "Foto Casa",
    description: "Luxury living spaces with premium finishes.",
    image: "./src/assets/photo.png"
  },
  {
    id: 8,
    title: "Foto Casa",
    description: "Contemporary architecture and smart home features.",
    image: "./src/assets/photo.png"
  },
  {
    id: 9,
    title: "Foto Casa",
    description: "Sustainable building design with green space.",
    image: "./src/assets/photo.png"
  }
];

function FeedGrid(props: FeedGridProps) {
  const [items, setItems] = useState<CardItem[]>(props.items || DEFAULT_ITEMS);
  const [draggedItem, setDraggedItem] = useState<CardItem | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (item: CardItem) => {
    setDraggedItem(item);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (targetItem: CardItem, targetIndex: number) => {
    if (!draggedItem || draggedItem.id === targetItem.id) {
      setDraggedItem(null);
      setDragOverIndex(null);
      return;
    }

    const draggedIndex = items.findIndex((item) => item.id === draggedItem.id);
    const newItems = [...items];
    
    // Remove dragged item
    newItems.splice(draggedIndex, 1);
    
    // Insert at new position
    let insertIndex = targetIndex;
    if (draggedIndex < targetIndex) {
      insertIndex = targetIndex - 1;
    }
    newItems.splice(insertIndex, 0, draggedItem);
    
    setItems(newItems);
    props.onItemsChange?.(newItems);
    
    setDraggedItem(null);
    setDragOverIndex(null);
  };

  return (
    <div className="
      grid 
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-4"
    >
      {items.map((item, index) => (
        <FeedCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          onDragStart={() => handleDragStart(item)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => {
            handleDragOver(e);
            setDragOverIndex(index);
          }}
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(item, index)}
          isDragging={draggedItem?.id === item.id}
          isDragOver={dragOverIndex === index}
        />
      ))}
    </div>

  );
}

export default FeedGrid;