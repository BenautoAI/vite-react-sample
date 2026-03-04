import { useState, useCallback } from 'react';

export interface DraggableItem {
  id: string | number;
  [key: string]: any;
}

export function useDragAndDrop<T extends DraggableItem>(initialData: T[]) {
  const [data, setData] = useState<T[]>(initialData);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = useCallback((index: number) => {
    setDraggedIndex(index);
  }, []);

  const handleDragOver = useCallback((index: number) => {
    setDragOverIndex(index);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragOverIndex(null);
  }, []);

  const handleDrop = useCallback((dropIndex: number) => {
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newData = [...data];
    const draggedItem = newData[draggedIndex];
    
    // Remove item from original position
    newData.splice(draggedIndex, 1);
    // Insert item at new position
    newData.splice(dropIndex, 0, draggedItem);

    setData(newData);
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [data, draggedIndex]);

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, []);

  return {
    data,
    setData,
    draggedIndex,
    dragOverIndex,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  };
}
