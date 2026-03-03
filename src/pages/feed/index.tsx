import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"
import CardList, { CardListItem } from "../../components/CardList"

function FeedPage() {
  const cardItems: CardListItem[] = [
    {
      id: '1',
      image: './src/assets/photo.png',
      title: 'Character Card 1',
      description: 'An anime-inspired character with unique styling and expression.',
      borderColor: 'gradient-purple'
    },
    {
      id: '2',
      image: './src/assets/photo.png',
      title: 'Character Card 2',
      description: 'Dynamic character design with vibrant color palette.',
      borderColor: 'gradient-blue'
    },
    {
      id: '3',
      image: './src/assets/photo.png',
      title: 'Character Card 3',
      description: 'Creative character artwork with artistic elements.',
      borderColor: 'gradient-green'
    },
  ];

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Card List Example</h2>
        <CardList items={cardItems} columns={3} variant="grid" />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;