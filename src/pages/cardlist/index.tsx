import { useState } from 'react';
import CardList from "../../components/CardList"
import useDragDrop from "../../hooks/useDragDrop"

interface CardItem {
  id: string;
  image: string;
  title: string;
}

const sampleCards: CardItem[] = [
  {
    id: "1",
    image: "./src/assets/photo.png",
    title: "User One"
  },
  {
    id: "2",
    image: "./src/assets/photo.png",
    title: "User Two"
  },
  {
    id: "3",
    image: "./src/assets/photo.png",
    title: "User Three"
  },
  {
    id: "4",
    image: "./src/assets/photo.png",
    title: "User Four"
  },
  {
    id: "5",
    image: "./src/assets/photo.png",
    title: "User Five"
  }
];

function CardListPage() {
  const {
    items,
    draggedItemId,
    dragOverItemId,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
  } = useDragDrop(sampleCards);

  return (
    <div className="w-full bg-gray-50 min-h-screen py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Card List</h1>
        <p className="text-gray-500 mt-2">Drag and drop to reorder cards</p>
      </div>
      <CardList
        items={items}
        draggedItemId={draggedItemId}
        dragOverItemId={dragOverItemId}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      />
    </div>
  );
}

export default CardListPage;
