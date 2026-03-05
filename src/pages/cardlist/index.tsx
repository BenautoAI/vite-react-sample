import FeedGrid from '../../components/Grids/Index';

interface Card {
  id: string;
  title: string;
}

function CardListPage() {
  // Sample card data
  const cardData: Card[] = [
    { id: '1', title: 'Stunning Architecture' },
    { id: '2', title: 'Modern Design' },
    { id: '3', title: 'Creative Space' },
    { id: '4', title: 'Beautiful Interiors' },
    { id: '5', title: 'Cozy Home' },
    { id: '6', title: 'Luxury Living' },
    { id: '7', title: 'Elegant Decor' },
    { id: '8', title: 'Contemporary Style' },
    { id: '9', title: 'Dream House' },
  ];

  return (
    <div className="w-full p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Card List</h1>
        <p className="mt-2 text-gray-600">Browse our collection of beautiful spaces and designs</p>
      </div>
      <FeedGrid cards={cardData} />
    </div>
  );
}

export default CardListPage;
