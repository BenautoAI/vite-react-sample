import { useState } from 'react';
import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

interface CardData {
  title: string;
  description: string;
}

function FeedPage() {
  const [cards, setCards] = useState<CardData[] | undefined>(undefined);

  const handleCardsChange = (newCards: CardData[]) => {
    setCards(newCards);
  };

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid cards={cards} onCardsChange={handleCardsChange} />
      </div>
    </>
  );
}

export default FeedPage;