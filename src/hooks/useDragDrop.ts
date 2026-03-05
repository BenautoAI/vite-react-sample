import { useState } from 'react';

interface DragItem {
  id: string;
}

interface UseDragDropResult<T extends DragItem> {
  items: T[];
  draggedItemId: string | null;
  dragOverItemId: string | null;
  handleDragStart: (id: string) => void;
  handleDragOver: (id: string) => void;
  handleDragEnd: () => void;
  setItems: (items: T[]) => void;
}

function useDragDrop<T extends DragItem>(initialItems: T[]): UseDragDropResult<T> {
  const [items, setItems] = useState<T[]>(initialItems);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [dragOverItemId, setDragOverItemId] = useState<string | null>(null);

  const handleDragStart = (id: string) => {
    setDraggedItemId(id);
  };

  const handleDragOver = (id: string) => {
    if (draggedItemId === null || draggedItemId === id) {
      return;
    }

    setDragOverItemId(id);

    // Reorder items
    const draggedItem = items.find((item) => item.id === draggedItemId);
    const dragOverItem = items.find((item) => item.id === id);

    if (!draggedItem || !dragOverItem) {
      return;
    }

    const draggedIndex = items.indexOf(draggedItem);
    const dragOverIndex = items.indexOf(dragOverItem);

    const newItems = [...items];
    newItems.splice(draggedIndex, 1);
    newItems.splice(dragOverIndex, 0, draggedItem);

    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggedItemId(null);
    setDragOverItemId(null);
  };

  return {
    items,
    draggedItemId,
    dragOverItemId,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    setItems,
  };
}

export default useDragDrop;
