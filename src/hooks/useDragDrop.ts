import { useState, useCallback } from 'react';

interface DragDropItem {
  id: string;
  title: string;
}

interface UseDragDropReturn {
  items: DragDropItem[];
  draggedItemId: string | null;
  dragOverItemId: string | null;
  handleDragStart: (id: string) => void;
  handleDragOver: (id: string) => void;
  handleDragEnd: () => void;
  handleDrop: (id: string) => void;
}

export function useDragDrop(initialItems: DragDropItem[]): UseDragDropReturn {
  const [items, setItems] = useState<DragDropItem[]>(initialItems);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [dragOverItemId, setDragOverItemId] = useState<string | null>(null);

  const handleDragStart = useCallback((id: string) => {
    setDraggedItemId(id);
  }, []);

  const handleDragOver = useCallback((id: string) => {
    setDragOverItemId(id);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggedItemId(null);
    setDragOverItemId(null);
  }, []);

  const handleDrop = useCallback((targetId: string) => {
    if (!draggedItemId || draggedItemId === targetId) {
      handleDragEnd();
      return;
    }

    setItems((prevItems) => {
      const draggedIndex = prevItems.findIndex((item) => item.id === draggedItemId);
      const targetIndex = prevItems.findIndex((item) => item.id === targetId);

      if (draggedIndex === -1 || targetIndex === -1) {
        return prevItems;
      }

      const newItems = [...prevItems];
      const [draggedItem] = newItems.splice(draggedIndex, 1);
      newItems.splice(targetIndex, 0, draggedItem);

      return newItems;
    });

    handleDragEnd();
  }, [draggedItemId, handleDragEnd]);

  return {
    items,
    draggedItemId,
    dragOverItemId,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDrop,
  };
}
