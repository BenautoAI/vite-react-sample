interface CardItem {
  id: string | number;
  title: string;
  description: string;
}

interface CardListProps {
  cards: CardItem[];
  columns?: number;
}

function CardList(props: CardListProps) {
  const { cards, columns = 3 } = props;
  
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns as 1 | 2 | 3 | 4] || 'grid-cols-3';

  return (
    <div className={`
      grid 
      ${gridColsClass}
      gap-4
      w-full
    `}>
      {cards.map((card) => (
        <div
          key={card.id}
          className="
            bg-white 
            rounded-lg 
            shadow-md 
            h-96
            p-4
            hover:shadow-lg
            transition-shadow
            duration-300
            cursor-pointer
          "
        >
          <h2 className="text-lg font-medium text-gray-900">
            {card.title}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
