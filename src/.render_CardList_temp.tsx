import { useState } from 'react';
import CardList from "./components/CardList";

const sampleCards = [
  {
    id: 1,
    title: "Foto Casa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    title: "Foto Casa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    title: "Foto Casa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 4,
    title: "Foto Casa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 5,
    title: "Foto Casa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 6,
    title: "Foto Casa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];

export default function CardListRender() {
  const [cards, setCards] = useState(sampleCards);

  const handleReorder = (reorderedCards: typeof sampleCards) => {
    setCards(reorderedCards);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Card List with Drag & Drop</h1>
      <p className="text-gray-600 mb-8">Drag and drop cards to reorder them</p>
      <CardList cards={cards} columns={3} onCardsReorder={handleReorder} />
    </div>
  );
}
