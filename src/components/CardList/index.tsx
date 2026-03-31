interface CardItem {
  id: string | number;
  title: string;
  description?: string;
}

interface CardListProps {
  items: CardItem[];
  layout?: 'grid' | 'list';
  columns?: number;
}

function CardList(props: CardListProps) {
  const { items, layout = 'grid', columns = 3 } = props;

  const gridClass = layout === 'grid' ? `grid-cols-${columns}` : '';
  const containerClass = layout === 'grid'
    ? `grid ${gridClass} gap-4`
    : 'flex flex-col gap-4';

  return (
    <div className={containerClass}>
      {items.map((item) => (
        <div
          key={item.id}
          className="
            bg-white 
            rounded-lg 
            shadow-md 
            p-4
            hover:shadow-lg
            transition-shadow
          "
        >
          <h2 className="text-lg font-medium text-gray-900">{item.title}</h2>
          {item.description && (
            <p className="mt-2 text-sm text-gray-500">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardList;
