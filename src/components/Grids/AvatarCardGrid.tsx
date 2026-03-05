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

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {cardsToDisplay.map((card, index) => (
        <AvatarCard
          key={index}
          title={card.title}
          description={card.description}
          avatarImage={card.avatarImage}
        />
      ))}
    </div>
  );
}

export default AvatarCardGrid;
