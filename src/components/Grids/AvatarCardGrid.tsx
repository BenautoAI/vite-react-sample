import { useState } from "react";
import AvatarCard from "../AvatarCard";
import photo from "../../assets/photo.png";

interface AvatarCardData {
  title: string;
  description: string;
  avatarImage: string;
}

interface AvatarCardGridProps {
  cards?: AvatarCardData[];
}

function AvatarCardGrid(props: AvatarCardGridProps) {
  const defaultCards: AvatarCardData[] = [
    {
      title: "Anime Character 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatarImage: photo,
    },
    {
      title: "Anime Character 2",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      avatarImage: photo,
    },
    {
      title: "Anime Character 3",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      avatarImage: photo,
    },
    {
      title: "Anime Character 4",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      avatarImage: photo,
    },
    {
      title: "Anime Character 5",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      avatarImage: photo,
    },
    {
      title: "Anime Character 6",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
      avatarImage: photo,
    },
  ];

  const cardsToDisplay = props.cards || defaultCards;
  const [cards, setCards] = useState<AvatarCardData[]>(cardsToDisplay);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    if (e.dataTransfer.setDragImage) {
      e.dataTransfer.setDragImage(e.currentTarget, 0, 0);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      handleDragEnd();
      return;
    }

    const newCards = [...cards];
    const draggedCard = newCards[draggedIndex];
    
    // Remove from original position
    newCards.splice(draggedIndex, 1);
    // Insert at new position
    newCards.splice(dropIndex, 0, draggedCard);
    
    setCards(newCards);
    handleDragEnd();
  };

  const handleDragEnter = (index: number) => {
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {cards.map((card, index) => (
        <div
          key={`card-${index}`}
          onDragEnter={() => handleDragEnter(index)}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className={`
            transition-all
            duration-200
            ${dragOverIndex === index && draggedIndex !== index ? 'opacity-50 scale-95' : ''}
          `}
        >
          <AvatarCard
            title={card.title}
            description={card.description}
            avatarImage={card.avatarImage}
            index={index}
            isDragging={draggedIndex === index}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </div>
      ))}
    </div>
  );
}

export default AvatarCardGrid;
