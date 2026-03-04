import { useState } from 'react';
import CardListItem from '../CardListItem';

interface CardData {
  id: string | number;
  image: string;
  nickname: string;
  realname: string;
  followUrl?: string;
}

interface CardListProps {
  items: CardData[];
  onItemsReorder?: (items: CardData[]) => void;
}

function CardList(props: CardListProps) {
  const [items, setItems] = useState<CardData[]>(props.items);
  const [draggedId, setDraggedId] = useState<string | number | null>(null);
  const [draggedOverId, setDraggedOverId] = useState<string | number | null>(null);

  const handleDragStart = (id: string | number) => {
    setDraggedId(id);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDraggedOverId(null);
  };

  const handleDragOver = () => {
    // Visual feedback handled by isDraggedOver prop
  };

  const handleDragLeave = () => {
    setDraggedOverId(null);
  };

  const handleDrop = (targetId: string | number) => {
    if (draggedId === null || draggedId === targetId) {
      setDraggedId(null);
      setDraggedOverId(null);
      return;
    }

    // Find indices of dragged and target items
    const draggedIndex = items.findIndex((item) => item.id === draggedId);
    const targetIndex = items.findIndex((item) => item.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) {
      return;
    }

    // Create a new array with reordered items
    const newItems = [...items];
    const draggedItem = newItems[draggedIndex];

    // Remove dragged item
    newItems.splice(draggedIndex, 1);

    // Insert at new position
    const newIndex = draggedIndex < targetIndex ? targetIndex - 1 : targetIndex;
    newItems.splice(newIndex, 0, draggedItem);

    setItems(newItems);
    props.onItemsReorder?.(newItems);
    setDraggedId(null);
    setDraggedOverId(null);
  };

  return (
    <div className="
      cardlist__container
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      w-full
      ">
      {items.map((item) => (
        <CardListItem
          key={item.id}
          id={item.id}
          image={item.image}
          nickname={item.nickname}
          realname={item.realname}
          followUrl={item.followUrl}
          onDragStart={(e, id) => {
            e.dataTransfer!.effectAllowed = 'move';
            handleDragStart(id);
          }}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => {
            e.dataTransfer!.dropEffect = 'move';
            setDraggedOverId(item.id);
            handleDragOver();
          }}
          onDragLeave={handleDragLeave}
          onDrop={(e, id) => handleDrop(id)}
          isDraggedOver={draggedOverId === item.id}
        />
      ))}
    </div>
  );
}

export default CardList;
