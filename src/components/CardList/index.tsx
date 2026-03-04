import Card from "../Card";

interface CardData {
  image: string;
  title: string;
  id?: string | number;
}

interface CardListProps {
  data: CardData[];
}

function CardList(props: CardListProps) {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {props.data.map((item) => (
        <Card 
          key={item.id || item.title} 
          image={item.image} 
          title={item.title} 
        />
      ))}
    </div>
  );
}

export default CardList;
