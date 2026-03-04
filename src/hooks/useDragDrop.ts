import { useState, useCallback } from 'react';

interface DragDropState {
  draggedId: string | null;
  dragOverId: string | null;
}

export function useDragDrop<T extends { id: string }>(items: T[], onReorder: (newItems: T[]) => void) {
  const [dragState, setDragState] = useState<DragDropState>({
    draggedId: null,
    dragOverId: null,
  });

  const handleDragStart = useCallback(
    (e: React.DragEvent<HTMLDivElement>, id: string) => {
      setDragState({
        draggedId: id,
        dragOverId: null,
      });
      e.dataTransfer.effectAllowed = 'move';
    },
    []
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragState((prev) => ({
      ...prev,
      dragOverId: id,
    }));
  }, []);

  const handleDragLeave = useCallback(() => {
    setDragState((prev) => ({
      ...prev,
      dragOverId: null,
    }));
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>, dropId: string) => {
      e.preventDefault();

      if (!dragState.draggedId || dragState.draggedId === dropId) {
        setDragState({ draggedId: null, dragOverId: null });
        return;
      }

      const draggedIndex = items.findIndex((item) => item.id === dragState.draggedId);
      const dropIndex = items.findIndex((item) => item.id === dropId);

      if (draggedIndex === -1 || dropIndex === -1) {
        setDragState({ draggedId: null, dragOverId: null });
        return;
      }

      const newItems = [...items];
      const [draggedItem] = newItems.splice(draggedIndex, 1);
      newItems.splice(dropIndex, 0, draggedItem);

      onReorder(newItems);
      setDragState({ draggedId: null, dragOverId: null });
    },
    [dragState.draggedId, items, onReorder]
  );

  const handleDragEnd = useCallback(() => {
    setDragState({ draggedId: null, dragOverId: null });
  }, []);

  return {
    dragState,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  };
}
