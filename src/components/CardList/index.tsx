import { useState } from 'react';
import Card from "../Card";

export interface CardListItem {
  id: string;
  image: string;
  title: string;
  description?: string;
  borderColor?: 'gradient-purple' | 'gradient-blue' | 'gradient-green';
}

interface CardListProps {
  items: CardListItem[];
  columns?: 3 | 4 | 6;
  variant?: 'grid' | 'list';
  onItemsReorder?: (reorderedItems: CardListItem[]) => void;
}

function CardList(props: CardListProps) {
  const [items, setItems] = useState<CardListItem[]>(props.items);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  
  const columns = props.columns || 3;
  const variant = props.variant || 'grid';

  const gridClasses = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (draggedIndex !== null && draggedIndex !== index) {
      const newItems = [...items];
      const draggedItem = newItems[draggedIndex];
      newItems.splice(draggedIndex, 1);
      newItems.splice(index, 0, draggedItem);
      
      setItems(newItems);
      if (props.onItemsReorder) {
        props.onItemsReorder(newItems);
      }
    }
    
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const renderCards = () => {
    return items.map((item, index) => (
      <div
        key={item.id}
        draggable
        onDragStart={() => handleDragStart(index)}
        onDragOver={(e) => handleDragOver(e, index)}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, index)}
        onDragEnd={handleDragEnd}
        className={`
          transition-opacity
          duration-200
          ${draggedIndex === index ? 'opacity-50' : 'opacity-100'}
          ${dragOverIndex === index && draggedIndex !== index ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
        `}
      >
        <Card
          image={item.image}
          title={item.title}
          description={item.description}
          borderColor={item.borderColor}
        />
      </div>
    ));
  };

  if (variant === 'list') {
    return (
      <div className="
        cardlist__container
        flex
        flex-col
        gap-4
      ">
        {renderCards()}
      </div>
    );
  }

  return (
    <div className={`
      cardlist__container
      grid
      ${gridClasses[columns]}
      gap-4
    `}>
      {renderCards()}
    </div>
  );
}

export default CardList;
