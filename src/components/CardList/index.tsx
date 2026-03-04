import ProfileCard from "../ProfileCard";

interface ProfileCardData {
  id: string;
  name: string;
  title: string;
  image: string;
  actionLabel: string;
}

interface CardListProps {
  cards: ProfileCardData[];
  onAction?: (id: string) => void;
}

function CardList(props: CardListProps) {
  return (
    <div className="
      cardlist__container
      grid
      grid-cols-3
      gap-4
      w-full
      ">
      {props.cards.map((card) => (
        <ProfileCard
          key={card.id}
          id={card.id}
          name={card.name}
          title={card.title}
          image={card.image}
          actionLabel={card.actionLabel}
          onAction={props.onAction}
        />
      ))}
    </div>
  );
}

export default CardList;
