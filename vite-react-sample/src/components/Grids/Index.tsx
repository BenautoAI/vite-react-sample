import FeedCard from "../FeedCard";

interface FeedItem {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  likes?: number;
  comments?: number;
}

interface FeedGridProps {
  items?: FeedItem[];
}

function FeedGrid(props: FeedGridProps) {
  const { items } = props;

  // Default sample data if no items provided
  const defaultItems: FeedItem[] = [
    {
      id: 1,
      title: "Beautiful Sunset",
      description: "Captured this amazing sunset view from the beach. Nature never fails to amaze!",
      likes: 124,
      comments: 8
    },
    {
      id: 2,
      title: "Mountain Adventure",
      description: "Hiking through the mountains was an incredible experience. The views were breathtaking!",
      likes: 89,
      comments: 12
    },
    {
      id: 3,
      title: "City Lights",
      description: "The city looks magical at night with all the lights reflecting off the buildings.",
      likes: 156,
      comments: 23
    },
    {
      id: 4,
      title: "Coffee Break",
      description: "Starting the day with a perfect cup of coffee and some good vibes.",
      likes: 67,
      comments: 5
    },
    {
      id: 5,
      title: "Ocean Waves",
      description: "There's something peaceful about watching the waves crash on the shore.",
      likes: 201,
      comments: 15
    },
    {
      id: 6,
      title: "Urban Exploration",
      description: "Discovering hidden gems in the city streets. Every corner has a story.",
      likes: 93,
      comments: 7
    },
    {
      id: 7,
      title: "Sunset Vibes",
      description: "Golden hour never disappoints. This is my favorite time of the day.",
      likes: 178,
      comments: 19
    },
    {
      id: 8,
      title: "Nature Walk",
      description: "Taking a peaceful walk through the forest. Perfect way to disconnect.",
      likes: 112,
      comments: 9
    },
    {
      id: 9,
      title: "Street Art",
      description: "Found this incredible mural today. Street art brings so much life to the city.",
      likes: 145,
      comments: 11
    }
  ];

  const feedItems = items || defaultItems;

  return (
    <div className="
      grid 
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-6
      w-full
      "
    >
      {feedItems.map((item) => (
        <FeedCard 
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          likes={item.likes}
          comments={item.comments}
        />
      ))}
    </div>

  );
}

export default FeedGrid;