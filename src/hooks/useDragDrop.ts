import { useState } from 'react';

interface DragDropItem {
  id: string;
  [key: string]: any;
}

interface UseDragDropReturn<T extends DragDropItem> {
  items: T[];
  draggedItem: T | null;
  draggedOverItem: T | null;
  handleDragStart: (item: T) => void;
  handleDragOver: (item: T) => void;
  handleDrop: () => void;
  handleDragEnd: () => void;
  reorderItems: (newItems: T[]) => void;
}

export function useDragDrop<T extends DragDropItem>(
  initialItems: T[]
): UseDragDropReturn<T> {
  const [items, setItems] = useState<T[]>(initialItems);
  const [draggedItem, setDraggedItem] = useState<T | null>(null);
  const [draggedOverItem, setDraggedOverItem] = useState<T | null>(null);

  const handleDragStart = (item: T) => {
    setDraggedItem(item);
  };

  const handleDragOver = (item: T) => {
    if (draggedItem && draggedItem.id !== item.id) {
      setDraggedOverItem(item);
    }
  };

  const handleDrop = () => {
    if (!draggedItem || !draggedOverItem) {
      return;
    }

    const draggedIndex = items.findIndex((item) => item.id === draggedItem.id);
    const draggedOverIndex = items.findIndex(
      (item) => item.id === draggedOverItem.id
    );

    if (draggedIndex === -1 || draggedOverIndex === -1) {
      return;
    }

    const newItems = [...items];
    newItems[draggedIndex] = items[draggedOverIndex];
    newItems[draggedOverIndex] = items[draggedIndex];

    setItems(newItems);
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  const reorderItems = (newItems: T[]) => {
    setItems(newItems);
  };

  return {
    items,
    draggedItem,
    draggedOverItem,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
    reorderItems,
  };
}
