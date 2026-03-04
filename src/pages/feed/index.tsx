import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

interface CardData {
  id: number;
  title: string;
  image?: string;
  description?: string;
}

function FeedPage() {
  const sampleCards: CardData[] = [
    {
      id: 1,
      title: "Modern House",
      image: "./src/assets/photo.png",
      description: "Beautiful modern architecture with contemporary design elements and natural lighting."
    },
    {
      id: 2,
      title: "Urban Living",
      image: "./src/assets/photo.png",
      description: "Contemporary urban apartment with sleek finishes and smart home features."
    },
    {
      id: 3,
      title: "Coastal Villa",
      image: "./src/assets/photo.png",
      description: "Stunning seaside property with panoramic ocean views and exclusive amenities."
    },
    {
      id: 4,
      title: "Luxury Estate",
      image: "./src/assets/photo.png",
      description: "Premium residential estate with premium finishes and state-of-the-art facilities."
    },
    {
      id: 5,
      title: "Country Manor",
      image: "./src/assets/photo.png",
      description: "Spacious country property surrounded by natural landscapes and peaceful gardens."
    },
    {
      id: 6,
      title: "City Penthouse",
      image: "./src/assets/photo.png",
      description: "High-rise luxury penthouse with skyline views and premium city amenities access."
    },
    {
      id: 7,
      title: "Garden Villa",
      image: "./src/assets/photo.png",
      description: "Charming villa with lush gardens and outdoor entertainment spaces."
    },
    {
      id: 8,
      title: "Mountain Retreat",
      image: "./src/assets/photo.png",
      description: "Secluded mountain home with breathtaking views and nature surrounding."
    },
    {
      id: 9,
      title: "Waterfront House",
      image: "./src/assets/photo.png",
      description: "Elegant waterfront property with direct access and water views throughout."
    }
  ];

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid cards={sampleCards} />
      </div>
    </>
  );
}

export default FeedPage;
