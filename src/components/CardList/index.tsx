import { useState } from 'react';
import Card from "../Card";

export interface CardItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  [key: string]: any;
}

interface CardListProps {
  items: CardItem[];
  layout?: 'grid' | 'list';
  columns?: 1 | 2 | 3 | 4;
  onCardClick?: (item: CardItem) => void;
  onItemsReorder?: (reorderedItems: CardItem[]) => void;
  draggableEnabled?: boolean;
}

function CardList(props: CardListProps) {
  const [items, setItems] = useState<CardItem[]>(props.items);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [dragOverItemId, setDragOverItemId] = useState<string | null>(null);
  const layout = props.layout || 'grid';
  const columns = props.columns || 3;
  const draggableEnabled = props.draggableEnabled !== false;

  // Map column count to Tailwind grid classes
  const gridColsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  // Responsive grid classes: mobile-first approach
  // Mobile: 1 col, tablet: 2 cols, desktop: configured columns
  const responsiveGridClass = `
    grid-cols-1
    md:grid-cols-2
    lg:${gridColsMap[columns]}
  `;

  const containerClass =
    layout === 'grid'
      ? `grid ${responsiveGridClass} gap-4`
      : 'flex flex-col gap-4';

  const handleCardClick = (item: CardItem) => {
    if (props.onCardClick) {
      props.onCardClick(item);
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, itemId: string) => {
    setDraggedItemId(itemId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggedItemId(null);
    setDragOverItemId(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, itemId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverItemId(itemId);
  };

  const handleDragLeave = () => {
    setDragOverItemId(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetItemId: string) => {
    e.preventDefault();
    
    if (!draggedItemId || draggedItemId === targetItemId) {
      setDraggedItemId(null);
      setDragOverItemId(null);
      return;
    }

    const draggedIndex = items.findIndex(item => item.id === draggedItemId);
    const targetIndex = items.findIndex(item => item.id === targetItemId);

    if (draggedIndex === -1 || targetIndex === -1) {
      setDraggedItemId(null);
      setDragOverItemId(null);
      return;
    }

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggedItem);

    setItems(newItems);
    if (props.onItemsReorder) {
      props.onItemsReorder(newItems);
    }

    setDraggedItemId(null);
    setDragOverItemId(null);
  };

  return (
    <div className={containerClass}>
      {items.map((item) => (
        <div
          key={item.id}
          onDragOver={(e) => draggableEnabled && handleDragOver(e, item.id)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => draggableEnabled && handleDrop(e, item.id)}
          className={`
            ${dragOverItemId === item.id && draggedItemId ? 'opacity-60 scale-105 transition-all' : ''}
          `}
        >
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            onClick={() => handleCardClick(item)}
            draggable={draggableEnabled}
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragEnd={handleDragEnd}
            isDragging={draggedItemId === item.id}
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
