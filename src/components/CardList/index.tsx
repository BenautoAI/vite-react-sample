import Card from "../Card";

interface CardData {
  title: string;
  description: string;
}

interface CardListProps {
  cards: CardData[];
  columns?: 2 | 3 | 4;
  gap?: number;
}

function CardList(props: CardListProps) {
  const { cards, columns = 3, gap = 4 } = props;
  
  const gridColsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns];

  const gapClass = `gap-${gap}`;

  return (
    <div className={`grid ${gridColsClass} ${gapClass}`}>
      {cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
        />
      ))}
    </div>
  );
}

export default CardList;
