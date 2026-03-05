import CardList from '../CardList';

interface CardItem {
  id: number;
  title: string;
  description?: string;
  image?: string;
}

function FeedGrid() {
  const sampleCards: CardItem[] = [
    {
      id: 1,
      title: 'Foto Casa',
      description: 'A beautiful photo of our home',
      image: '/src/assets/photo.png',
    },
    {
      id: 2,
      title: 'Foto Casa',
      description: 'Another stunning house photo',
      image: '/src/assets/photo.png',
    },
    {
      id: 3,
      title: 'Foto Casa',
      description: 'Amazing interior design shot',
      image: '/src/assets/photo.png',
    },
    {
      id: 4,
      title: 'Foto Casa',
      description: 'Outdoor area showcase',
      image: '/src/assets/photo.png',
    },
    {
      id: 5,
      title: 'Foto Casa',
      description: 'Modern architecture highlight',
      image: '/src/assets/photo.png',
    },
    {
      id: 6,
      title: 'Foto Casa',
      description: 'Living room elegance',
      image: '/src/assets/photo.png',
    },
    {
      id: 7,
      title: 'Foto Casa',
      description: 'Kitchen design inspiration',
      image: '/src/assets/photo.png',
    },
    {
      id: 8,
      title: 'Foto Casa',
      description: 'Bedroom comfort zone',
      image: '/src/assets/photo.png',
    },
    {
      id: 9,
      title: 'Foto Casa',
      description: 'Bathroom luxury showcase',
      image: '/src/assets/photo.png',
    },
  ];

  const handleCardClick = (item: CardItem) => {
    console.log('Card clicked:', item.title);
  };

  return (
    <CardList
      items={sampleCards}
      onCardClick={handleCardClick}
      emptyMessage="No photos available"
    />
  );
}

export default FeedGrid;