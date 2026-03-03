import { useState } from 'react';
import CardList from "../../components/CardList";

interface Card {
  title: string;
  id?: string;
}

function CardListRenderPage() {
  const [sampleCards, setSampleCards] = useState<Card[]>([
    { title: "Foto Casa", id: "1" },
    { title: "Foto Casa", id: "2" },
    { title: "Foto Casa", id: "3" },
    { title: "Foto Casa", id: "4" },
    { title: "Foto Casa", id: "5" },
  ]);

  const handleCardReorder = (reorderedCards: Card[]) => {
    setSampleCards(reorderedCards);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="mb-8 text-2xl font-bold">Card List Component with Drag & Drop</h1>
      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">💡 Tip: Drag and drop cards to reorder them. Visual feedback shows when hovering over drop zones.</p>
      </div>
      <div className="max-w-2xl">
        <CardList cards={sampleCards} onChange={handleCardReorder} />
      </div>
    </div>
  );
}

export default CardListRenderPage;
