import Card from "../Card";

export interface CardItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  [key: string]: any;
}

interface CardListProps {
  items: CardItem[];
  layout?: 'grid' | 'list';
  columns?: 1 | 2 | 3 | 4;
  onCardClick?: (item: CardItem) => void;
}

function CardList(props: CardListProps) {
  const layout = props.layout || 'grid';
  const columns = props.columns || 3;

  // Map column count to Tailwind grid classes
  const gridColsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  // Responsive grid classes: mobile-first approach
  // Mobile: 1 col, tablet: 2 cols, desktop: configured columns
  const responsiveGridClass = `
    grid-cols-1
    md:grid-cols-2
    lg:${gridColsMap[columns]}
  `;

  const containerClass =
    layout === 'grid'
      ? `grid ${responsiveGridClass} gap-4`
      : 'flex flex-col gap-4';

  const handleCardClick = (item: CardItem) => {
    if (props.onCardClick) {
      props.onCardClick(item);
    }
  };

  return (
    <div className={containerClass}>
      {props.items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          onClick={() => handleCardClick(item)}
        />
      ))}
    </div>
  );
}

export default CardList;
