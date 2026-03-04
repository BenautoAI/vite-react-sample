interface CardData {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
}

interface CardListProps {
  cards: CardData[];
  onCardClick?: (cardId: string) => void;
}

function CardList(props: CardListProps) {
  return (
    <div className='
      cardlist__container
      flex
      flex-col
      gap-4
      w-full
    '>
      {props.cards.map((card) => (
        <div
          key={card.id}
          className='
            cardlist__item
            flex
            flex-row
            items-center
            bg-white
            rounded-lg
            shadow-md
            p-4
            cursor-pointer
            hover:shadow-lg
            transition-shadow
            duration-300
          '
          onClick={() => props.onCardClick?.(card.id)}
        >
          <div className='
            cardlist__image
            mr-4
            flex-shrink-0
          '>
            <div className='
              w-20
              h-20
              rounded-full
              bg-gradient-to-r
              from-[#6EE7B7]
              via-[#3B82F6]
              to-[#9333EA]
              p-[2px]
              flex
              items-center
              justify-center
              hover:scale-x-110
              hover:scale-y-110
              transition-transform
              duration-300
            '>
              <img
                src={card.image}
                alt={card.title}
                className='
                  w-full
                  h-full
                  rounded-full
                  object-cover
                '
              />
            </div>
          </div>

          <div className='
            cardlist__content
            flex-1
            flex
            flex-col
            justify-center
          '>
            <h3 className='
              text-lg
              font-medium
              text-gray-900
            '>
              {card.title}
            </h3>
            {card.subtitle && (
              <p className='
                mt-1
                text-sm
                text-gray-500
              '>
                {card.subtitle}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
