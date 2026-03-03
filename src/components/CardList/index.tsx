import Card from "../Card";

export interface CardListItem {
  id: string;
  image: string;
  title: string;
  description?: string;
  borderColor?: 'gradient-purple' | 'gradient-blue' | 'gradient-green';
}

interface CardListProps {
  items: CardListItem[];
  columns?: 3 | 4 | 6;
  variant?: 'grid' | 'list';
}

function CardList(props: CardListProps) {
  const columns = props.columns || 3;
  const variant = props.variant || 'grid';

  const gridClasses = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
  };

  if (variant === 'list') {
    return (
      <div className="
        cardlist__container
        flex
        flex-col
        gap-4
      ">
        {props.items.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            borderColor={item.borderColor}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`
      cardlist__container
      grid
      ${gridClasses[columns]}
      gap-4
    `}>
      {props.items.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          borderColor={item.borderColor}
        />
      ))}
    </div>
  );
}

export default CardList;
