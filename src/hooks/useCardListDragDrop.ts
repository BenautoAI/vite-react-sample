import { useState, useCallback } from 'react';

interface ProfileCardData {
  id: string;
  name: string;
  title: string;
  image: string;
  actionLabel: string;
}

interface UseCardListDragDropReturn {
  cards: ProfileCardData[];
  draggedCardId: string | null;
  draggedOverCardId: string | null;
  handleDragStart: (id: string) => void;
  handleDragOver: (id: string) => void;
  handleDragLeave: () => void;
  handleDrop: (targetId: string) => void;
  handleDragEnd: () => void;
}

function useCardListDragDrop(initialCards: ProfileCardData[]): UseCardListDragDropReturn {
  const [cards, setCards] = useState<ProfileCardData[]>(initialCards);
  const [draggedCardId, setDraggedCardId] = useState<string | null>(null);
  const [draggedOverCardId, setDraggedOverCardId] = useState<string | null>(null);

  const handleDragStart = useCallback((id: string) => {
    setDraggedCardId(id);
  }, []);

  const handleDragOver = useCallback((id: string) => {
    setDraggedOverCardId(id);
  }, []);

  const handleDragLeave = useCallback(() => {
    setDraggedOverCardId(null);
  }, []);

  const handleDrop = useCallback((targetId: string) => {
    if (!draggedCardId || draggedCardId === targetId) {
      setDraggedOverCardId(null);
      return;
    }

    const draggedIndex = cards.findIndex((card) => card.id === draggedCardId);
    const targetIndex = cards.findIndex((card) => card.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) {
      setDraggedOverCardId(null);
      return;
    }

    const newCards = [...cards];
    const [draggedCard] = newCards.splice(draggedIndex, 1);
    newCards.splice(targetIndex, 0, draggedCard);

    setCards(newCards);
    setDraggedOverCardId(null);
  }, [draggedCardId, cards]);

  const handleDragEnd = useCallback(() => {
    setDraggedCardId(null);
    setDraggedOverCardId(null);
  }, []);

  return {
    cards,
    draggedCardId,
    draggedOverCardId,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  };
}

export default useCardListDragDrop;
