import { useState } from 'react';
import Avatar from "../../components/Avatar"
import CardsList from "../../components/CardsList"

interface CardItem {
  id: string;
  title: string;
}

function FeedPage() {
  const initialItems: CardItem[] = [
    { id: "1", title: "Foto Casa" },
    { id: "2", title: "Foto Casa" },
    { id: "3", title: "Foto Casa" },
    { id: "4", title: "Foto Casa" },
    { id: "5", title: "Foto Casa" },
    { id: "6", title: "Foto Casa" },
    { id: "7", title: "Foto Casa" },
    { id: "8", title: "Foto Casa" },
    { id: "9", title: "Foto Casa" },
  ];

  const [cardItems, setCardItems] = useState<CardItem[]>(initialItems);

  const handleItemsChange = (newItems: CardItem[]) => {
    setCardItems(newItems);
  };

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <CardsList items={cardItems} onItemsChange={handleItemsChange} />
      </div>
    </>
  );
}

export default FeedPage;