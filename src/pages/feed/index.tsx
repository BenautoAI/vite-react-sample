import Avatar from "../../components/Avatar"
import CardList from "../../components/CardList"

function FeedPage() {
  // Sample data for card list
  const sampleCards = [
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

  const handleCardClick = (item: any) => {
    console.log('Card clicked:', item);
  };

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <CardList 
          items={sampleCards}
          layout="grid"
          columns={3}
          onCardClick={handleCardClick}
        />
      </div>
    </>
  );
}

export default FeedPage;
