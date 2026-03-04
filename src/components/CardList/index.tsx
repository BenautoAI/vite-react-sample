import { useState } from 'react';

interface CardData {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
}

interface CardListProps {
  cards: CardData[];
  onCardClick?: (cardId: string) => void;
  onCardsChange?: (cards: CardData[]) => void;
}

function CardList(props: CardListProps) {
  const [cardList, setCardList] = useState<CardData[]>(props.cards);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newCards = [...cardList];
    const draggedCard = newCards[draggedIndex];
    newCards.splice(draggedIndex, 1);
    newCards.splice(dropIndex, 0, draggedCard);

    setCardList(newCards);
    props.onCardsChange?.(newCards);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div className='
      cardlist__container
      flex
      flex-col
      gap-4
      w-full
    '>
      {cardList.map((card, index) => (
        <div
          key={card.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
          className={`
            cardlist__item
            flex
            flex-row
            items-center
            bg-white
            rounded-lg
            shadow-md
            p-4
            cursor-grab
            active:cursor-grabbing
            hover:shadow-lg
            transition-all
            duration-200
            ${draggedIndex === index ? 'opacity-50' : ''}
            ${dragOverIndex === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''}
          `}
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
