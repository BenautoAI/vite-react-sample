import CardListItem from '../CardListItem';

interface CardData {
  id: string | number;
  image: string;
  nickname: string;
  realname: string;
  followUrl?: string;
}

interface CardListProps {
  items: CardData[];
}

function CardList(props: CardListProps) {
  return (
    <div className="
      cardlist__container
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      w-full
      ">
      {props.items.map((item) => (
        <CardListItem
          key={item.id}
          id={item.id}
          image={item.image}
          nickname={item.nickname}
          realname={item.realname}
          followUrl={item.followUrl}
        />
      ))}
    </div>
  );
}

export default CardList;
