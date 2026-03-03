import { useState } from 'react';
import Avatar from "../../components/Avatar"
import DynamicCardList from "../../components/DynamicCardList"

interface CardData {
  id?: string | number;
  title: string;
  description?: string;
}

function FeedPage() {
  const initialCardData: CardData[] = [
    { id: 1, title: "Foto Casa" },
    { id: 2, title: "Foto Casa" },
    { id: 3, title: "Foto Casa" },
    { id: 4, title: "Foto Casa" },
    { id: 5, title: "Foto Casa" },
    { id: 6, title: "Foto Casa" },
    { id: 7, title: "Foto Casa" },
    { id: 8, title: "Foto Casa" },
    { id: 9, title: "Foto Casa" },
  ];

  const [cardData, setCardData] = useState<CardData[]>(initialCardData);

  const handleCardsReorder = (reorderedCards: CardData[]) => {
    setCardData(reorderedCards);
  };

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <DynamicCardList cards={cardData} onCardsReorder={handleCardsReorder} />
      </div>
    </>
  );
}

export default FeedPage;
