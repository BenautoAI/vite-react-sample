import { useState } from 'react';
import CardList from '../../components/CardList';

interface CardItem {
  id: string;
  nickname: string;
  realname: string;
  image: string;
}

function CardListPage() {
  const initialCardItems: CardItem[] = [
    {
      id: '1',
      nickname: '@Felipao__DIO🚀',
      realname: 'Felipe Aguiar',
      image: './src/assets/photo.png'
    },
    {
      id: '2',
      nickname: '@DevMaster',
      realname: 'Alex Developer',
      image: './src/assets/photo.png'
    },
    {
      id: '3',
      nickname: '@DesignPro',
      realname: 'Sarah Designer',
      image: './src/assets/photo.png'
    },
    {
      id: '4',
      nickname: '@CodeNinja',
      realname: 'John Smith',
      image: './src/assets/photo.png'
    },
    {
      id: '5',
      nickname: '@WebWizard',
      realname: 'Emma Johnson',
      image: './src/assets/photo.png'
    }
  ];

  const [cardItems, setCardItems] = useState<CardItem[]>(initialCardItems);

  const handleItemsChange = (newItems: CardItem[]) => {
    setCardItems(newItems);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="
        text-3xl 
        font-bold 
        text-gray-900 
        mb-8
      ">
        Users List
      </h1>
      <CardList items={cardItems} onItemsChange={handleItemsChange} />
    </div>
  );
}

export default CardListPage;
