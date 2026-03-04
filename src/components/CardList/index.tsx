import CardItem from "../CardItem";

interface CardListItem {
  id: string;
  image: string;
  title: string;
}

interface CardListProps {
  items?: CardListItem[];
}

// Mock data for demonstration
const mockData: CardListItem[] = [
  { id: "1", image: "./src/assets/photo.png", title: "Felipe Aguiar" },
  { id: "2", image: "./src/assets/photo.png", title: "Ana Silva" },
  { id: "3", image: "./src/assets/photo.png", title: "Carlos Santos" },
  { id: "4", image: "./src/assets/photo.png", title: "Marina Costa" },
  { id: "5", image: "./src/assets/photo.png", title: "João Oliveira" },
  { id: "6", image: "./src/assets/photo.png", title: "Sofia Lima" },
  { id: "7", image: "./src/assets/photo.png", title: "Pedro Ferreira" },
  { id: "8", image: "./src/assets/photo.png", title: "Lucia Martins" },
  { id: "9", image: "./src/assets/photo.png", title: "Rafael Rocha" },
];

function CardList(props: CardListProps) {
  const items = props.items || mockData;

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4
      p-4
      ">
      {items.map((item) => (
        <CardItem 
          key={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default CardList;
