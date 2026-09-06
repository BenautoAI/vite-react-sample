import FeedCard from "../FeedCard";
import photoPlaceholder from "../../assets/photo.png";

interface FeedItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

// Sample data with varied content for visual testing
const sampleFeedData: FeedItem[] = [
  {
    id: 1,
    title: "Modern Living Space",
    description: "Beautiful open-concept living area with natural lighting and contemporary design elements.",
    imageUrl: photoPlaceholder,
  },
  {
    id: 2,
    title: "Cozy Bedroom",
    description: "Peaceful bedroom retreat with minimalist decor and warm ambiance.",
    imageUrl: photoPlaceholder,
  },
  {
    id: 3,
    title: "Gourmet Kitchen",
    description: "State-of-the-art kitchen featuring modern appliances and elegant finishes.",
    imageUrl: photoPlaceholder,
  },
  {
    id: 4,
    title: "Outdoor Patio",
    description: "Spacious outdoor entertaining area perfect for gatherings and relaxation.",
    imageUrl: photoPlaceholder,
  },
  {
    id: 5,
    title: "Home Office",
    description: "Dedicated workspace with built-in shelving and natural light.",
    imageUrl: photoPlaceholder,
  },
  {
    id: 6,
    title: "Luxury Bathroom",
    description: "Spa-like bathroom with premium fixtures and elegant tile work.",
    imageUrl: photoPlaceholder,
  },
  {
    id: 7,
    title: "Walk-in Closet",
    description: "Spacious storage solution with custom organization systems.",
    imageUrl: photoPlaceholder,
  },
  {
    id: 8,
    title: "Entertainment Room",
    description: "Perfect space for movie nights and leisure activities.",
    imageUrl: photoPlaceholder,
  },
  {
    id: 9,
    title: "Garden View",
    description: "Lush landscaping visible from multiple rooms throughout the property.",
    imageUrl: photoPlaceholder,
  },
];

/**
 * FeedGrid component displays a responsive grid of content cards.
 * Adapts from 1 column on mobile to 2 columns on tablet and 3 columns on desktop.
 * Each card shows an image preview with title and description.
 */
function FeedGrid() {
  return (
    <div
      className="
        grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        p-4
      "
    >
      {sampleFeedData.map((item) => (
        <FeedCard
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}

export default FeedGrid;