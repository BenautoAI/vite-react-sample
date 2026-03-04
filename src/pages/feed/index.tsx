import { useState } from 'react';
import Avatar from "../../components/Avatar"
import CardList, { CardItem } from "../../components/CardList"

function FeedPage() {
  // Sample data for card list
  const initialCards = [
    {
      id: '1',
      title: 'Foto Casa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './src/assets/photo.png',
    },
    {
      id: '2',
      title: 'Foto Casa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './src/assets/photo.png',
    },
    {
      id: '3',
      title: 'Foto Casa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './src/assets/photo.png',
    },
    {
      id: '4',
      title: 'Foto Casa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './src/assets/photo.png',
    },
    {
      id: '5',
      title: 'Foto Casa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './src/assets/photo.png',
    },
    {
      id: '6',
      title: 'Foto Casa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './src/assets/photo.png',
    },
  ];

  const [items, setItems] = useState<CardItem[]>(initialCards);

  const handleCardClick = (item: CardItem) => {
    console.log('Card clicked:', item);
  };

  const handleItemsReorder = (reorderedItems: CardItem[]) => {
    setItems(reorderedItems);
    console.log('Items reordered:', reorderedItems.map(item => item.id));
  };

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <CardList 
          items={items}
          layout="grid"
          columns={3}
          onCardClick={handleCardClick}
          onItemsReorder={handleItemsReorder}
          draggableEnabled={true}
        />
      </div>
    </>
  );
}

export default FeedPage;
