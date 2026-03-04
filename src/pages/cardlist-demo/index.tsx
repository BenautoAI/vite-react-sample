import { useState } from 'react';
import CardList from '../../components/CardList';

interface CardData {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
}

function CardListPage() {
  const initialCards: CardData[] = [
    {
      id: '1',
      image: './src/assets/photo.png',
      title: 'Card Title 1',
      subtitle: 'This is the subtitle for card 1'
    },
    {
      id: '2',
      image: './src/assets/photo.png',
      title: 'Card Title 2',
      subtitle: 'This is the subtitle for card 2'
    },
    {
      id: '3',
      image: './src/assets/photo.png',
      title: 'Card Title 3',
      subtitle: 'This is the subtitle for card 3'
    },
    {
      id: '4',
      image: './src/assets/photo.png',
      title: 'Card Title 4',
      subtitle: 'This is the subtitle for card 4'
    },
  ];

  const [cards, setCards] = useState<CardData[]>(initialCards);

  const handleCardClick = (cardId: string) => {
    console.log(`Card clicked: ${cardId}`);
  };

  const handleCardsChange = (reorderedCards: CardData[]) => {
    setCards(reorderedCards);
    console.log('Cards reordered:', reorderedCards);
  };

  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Card List Component</h1>
        <p className='text-gray-600 mb-4'>Drag and drop cards to reorder them</p>
        <CardList
          cards={cards}
          onCardClick={handleCardClick}
          onCardsChange={handleCardsChange}
        />
      </div>
    </div>
  );
}

export default CardListPage;
