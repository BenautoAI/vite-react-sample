import FeedCard from "../FeedCard";

interface CardItem {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
}

interface FeedGridProps {
  items?: CardItem[];
}

const DEFAULT_ITEMS: CardItem[] = [
  {
    id: 1,
    title: "Foto Casa",
    description: "A beautiful house view captured in daylight hours.",
    image: "./src/assets/photo.png"
  },
  {
    id: 2,
    title: "Foto Casa",
    description: "Interior design of modern residential space.",
    image: "./src/assets/photo.png"
  },
  {
    id: 3,
    title: "Foto Casa",
    description: "Architectural details and outdoor landscaping.",
    image: "./src/assets/photo.png"
  },
  {
    id: 4,
    title: "Foto Casa",
    description: "Evening lighting and facade design.",
    image: "./src/assets/photo.png"
  },
  {
    id: 5,
    title: "Foto Casa",
    description: "Garden and outdoor entertaining areas.",
    image: "./src/assets/photo.png"
  },
  {
    id: 6,
    title: "Foto Casa",
    description: "Modern minimalist interior design.",
    image: "./src/assets/photo.png"
  },
  {
    id: 7,
    title: "Foto Casa",
    description: "Luxury living spaces with premium finishes.",
    image: "./src/assets/photo.png"
  },
  {
    id: 8,
    title: "Foto Casa",
    description: "Contemporary architecture and smart home features.",
    image: "./src/assets/photo.png"
  },
  {
    id: 9,
    title: "Foto Casa",
    description: "Sustainable building design with green space.",
    image: "./src/assets/photo.png"
  }
];

function FeedGrid(props: FeedGridProps) {
  const itemsToDisplay = props.items || DEFAULT_ITEMS;

  return (
    <div className="
      grid 
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-4"
    >
      {itemsToDisplay.map((item) => (
        <FeedCard
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>

  );
}

export default FeedGrid;