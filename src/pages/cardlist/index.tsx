import { useState } from "react";
import CardList from "../../components/CardList";

interface CardItem {
  id: string;
  title: string;
}

function CardListPage() {
  const initialCards: CardItem[] = [
    { id: "1", title: "Foto Casa" },
    { id: "2", title: "Foto Praia" },
    { id: "3", title: "Foto Montanha" },
    { id: "4", title: "Foto Cidade" },
    { id: "5", title: "Foto Floresta" },
    { id: "6", title: "Foto Lago" },
  ];

  const [cards, setCards] = useState<CardItem[]>(initialCards);

  const handleReorder = (reorderedCards: CardItem[]) => {
    setCards(reorderedCards);
  };

  return (
    <div className="w-full p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Card List</h1>
      <p className="text-sm text-gray-600 mb-4">Drag and drop cards to reorder them</p>
      <CardList items={cards} onReorder={handleReorder} />
    </div>
  );
}

export default CardListPage;
