import Card from "../Card";

interface CardData {
  id: string | number;
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
}

interface CardListProps {
  cards: CardData[];
}

function CardList(props: CardListProps) {
  return (
    <div className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-3 
      xl:grid-cols-4 
      gap-4
    ">
      {props.cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          imageAlt={card.imageAlt}
        />
      ))}
    </div>
  );
}

export default CardList;
