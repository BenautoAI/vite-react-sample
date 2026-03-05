import AvatarCardList from '../../components/AvatarCardList';

function CardListPage() {
  const sampleCards = [
    {
      id: '1',
      nickname: '@UserOne',
      realname: 'User One',
      imageUrl: './src/assets/photo.png',
    },
    {
      id: '2',
      nickname: '@UserTwo',
      realname: 'User Two',
      imageUrl: './src/assets/photo.png',
    },
    {
      id: '3',
      nickname: '@UserThree',
      realname: 'User Three',
      imageUrl: './src/assets/photo.png',
    },
    {
      id: '4',
      nickname: '@UserFour',
      realname: 'User Four',
      imageUrl: './src/assets/photo.png',
    },
    {
      id: '5',
      nickname: '@UserFive',
      realname: 'User Five',
      imageUrl: './src/assets/photo.png',
    },
    {
      id: '6',
      nickname: '@UserSix',
      realname: 'User Six',
      imageUrl: './src/assets/photo.png',
    },
    {
      id: '7',
      nickname: '@UserSeven',
      realname: 'User Seven',
      imageUrl: './src/assets/photo.png',
    },
    {
      id: '8',
      nickname: '@UserEight',
      realname: 'User Eight',
      imageUrl: './src/assets/photo.png',
    },
  ];

  return (
    <div className="
      p-8 
      bg-gray-50 
      min-h-screen
    ">
      <div className="mb-8">
        <h1 className="
          text-3xl 
          font-bold 
          text-gray-900 
          mb-2
        ">
          Users
        </h1>
        <p className="
          text-gray-600
          text-sm
        ">
          Drag and drop cards to reorder them
        </p>
      </div>
      <AvatarCardList cards={sampleCards} />
    </div>
  );
}

export default CardListPage;
