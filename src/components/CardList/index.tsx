interface CardItem {
  id: string;
  title: string;
  description?: string;
}

interface CardListProps {
  items: CardItem[];
  variant?: 'grid' | 'list';
  columns?: number;
}

function CardList(props: CardListProps) {
  const { items, variant = 'grid', columns = 3 } = props;

  const containerClasses =
    variant === 'grid'
      ? `grid grid-cols-${columns} gap-4`
      : 'flex flex-col gap-4';

  return (
    <div className={containerClasses}>
      {items.map((item) => (
        <div
          key={item.id}
          className="
            bg-white 
            rounded-lg 
            shadow-md 
            p-4
            h-96
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
