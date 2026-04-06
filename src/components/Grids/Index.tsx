import FeedCard from "../FeedCard";

interface CardItem {
  id: string | number;
  title: string;
  description: string;
}

interface FeedGridProps {
  items?: CardItem[];
}

function FeedGrid(props: FeedGridProps) {
  const defaultItems: CardItem[] = [
    { id: 1, title: "Foto Casa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, title: "Foto Casa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, title: "Foto Casa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 4, title: "Foto Casa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 5, title: "Foto Casa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 6, title: "Foto Casa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 7, title: "Foto Casa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 8, title: "Foto Casa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 9, title: "Foto Casa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  const items = props.items || defaultItems;

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {items.map((item) => (
        <FeedCard 
          key={item.id} 
          title={item.title} 
          description={item.description} 
        />
      ))}
    </div>

  );
}

export default FeedGrid;