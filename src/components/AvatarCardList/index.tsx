import AvatarCard from '../AvatarCard';

interface CardData {
  id: string;
  nickname: string;
  realname: string;
  imageUrl?: string;
}

interface AvatarCardListProps {
  cards: CardData[];
}

function AvatarCardList(props: AvatarCardListProps) {
  return (
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-6 
      w-full
    ">
      {props.cards.map((card) => (
        <AvatarCard
          key={card.id}
          nickname={card.nickname}
          realname={card.realname}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}

export default AvatarCardList;
