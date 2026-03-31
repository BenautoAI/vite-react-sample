interface CardItem {
  id: string;
  title: string;
}

interface CardListProps {
  items?: CardItem[];
}

const DEFAULT_ITEMS: CardItem[] = [
  { id: '1', title: 'Foto Casa' },
  { id: '2', title: 'Foto Casa' },
  { id: '3', title: 'Foto Casa' },
  { id: '4', title: 'Foto Casa' },
  { id: '5', title: 'Foto Casa' },
  { id: '6', title: 'Foto Casa' },
  { id: '7', title: 'Foto Casa' },
  { id: '8', title: 'Foto Casa' },
  { id: '9', title: 'Foto Casa' },
];

import FeedCard from '../FeedCard';

function CardList(props: CardListProps) {
  const items = props.items ?? DEFAULT_ITEMS;

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {items.map((item) => (
        <FeedCard key={item.id} title={item.title} />
      ))}
    </div>
  );
}

export default CardList;
