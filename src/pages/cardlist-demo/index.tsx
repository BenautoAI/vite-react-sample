import CardList from '../../components/CardList';

interface CardData {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
}

function CardListPage() {
  const sampleCards: CardData[] = [
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

  const handleCardClick = (cardId: string) => {
    console.log(`Card clicked: ${cardId}`);
  };

  return (
    <div className='p-8 bg-gray-50 min-h-screen'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>Card List Component</h1>
        <CardList
          cards={sampleCards}
          onCardClick={handleCardClick}
        />
      </div>
    </div>
  );
}

export default CardListPage;
