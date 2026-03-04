import ProfileCard from "../ProfileCard";
import useCardListDragDrop from "../../hooks/useCardListDragDrop";

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
  onCardsReorder?: (cards: ProfileCardData[]) => void;
}

function CardList(props: CardListProps) {
  const {
    cards,
    draggedCardId,
    draggedOverCardId,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  } = useCardListDragDrop(props.cards);

  const handleDropWrapper = (targetId: string) => {
    handleDrop(targetId);
    props.onCardsReorder?.(cards);
  };
  return (
    <div className="
      cardlist__container
      grid
      grid-cols-3
      gap-4
      w-full
      ">
      {cards.map((card) => (
        <ProfileCard
          key={card.id}
          id={card.id}
          name={card.name}
          title={card.title}
          image={card.image}
          actionLabel={card.actionLabel}
          onAction={props.onAction}
          isDragging={draggedCardId === card.id}
          isDraggedOver={draggedOverCardId === card.id}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDropWrapper}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
}

export default CardList;
