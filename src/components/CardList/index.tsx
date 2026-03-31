interface CardItem {
  id: string;
  title: string;
  description?: string;
}

interface CardListProps {
  items: CardItem[];
  columns?: number;
}

function CardList(props: CardListProps) {
  const columns = props.columns || 3;
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns] || 'grid-cols-3';

  return (
    <div className={`
      grid 
      ${gridColsClass}
      gap-4
    `}>
      {props.items.map((item) => (
        <div
          key={item.id}
          className="
            bg-white 
            rounded-lg 
            shadow-md 
            h-96
            p-4
          "
        >
          <h2 className="text-lg font-medium text-gray-900">
            {item.title}
          </h2>
          {item.description && (
            <p className="mt-2 text-sm text-gray-500">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardList;
