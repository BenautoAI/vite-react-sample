import FeedCard from "../FeedCard";

interface CardData {
  id: string | number;
  title: string;
  description?: string;
}

interface CardListProps {
  cards: CardData[];
  columns?: number;
}

function CardList(props: CardListProps) {
  const columns = props.columns || 3;
  
  const gridColsMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };
  
  const gridColsClass = gridColsMap[columns] || 'grid-cols-3';

  return (
    <div className={`
      grid 
      ${gridColsClass}
      gap-4
    `}>
      {props.cards.map((card) => (
        <FeedCard
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default CardList;
