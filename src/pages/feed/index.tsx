import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

interface CardItem {
  id: string | number;
  title: string;
  description?: string;
}

function FeedPage() {
  const sampleData: CardItem[] = [
    {
      id: 1,
      title: "Foto Casa",
      description: "Beautiful modern house with elegant architecture and spacious gardens."
    },
    {
      id: 2,
      title: "Foto Casa",
      description: "Contemporary villa featuring minimalist design and stunning views."
    },
    {
      id: 3,
      title: "Foto Casa",
      description: "Luxury residence with premium finishes and state-of-the-art amenities."
    },
    {
      id: 4,
      title: "Foto Casa",
      description: "Charming countryside estate surrounded by lush greenery."
    },
    {
      id: 5,
      title: "Foto Casa",
      description: "Urban penthouse with panoramic city skyline views."
    },
    {
      id: 6,
      title: "Foto Casa",
      description: "Beachfront property with direct access to pristine white sand."
    },
    {
      id: 7,
      title: "Foto Casa",
      description: "Historic mansion restored to its original grandeur."
    },
    {
      id: 8,
      title: "Foto Casa",
      description: "Modern smart home with automated systems and eco-friendly features."
    },
    {
      id: 9,
      title: "Foto Casa",
      description: "Riverside cottage perfect for nature lovers seeking tranquility."
    }
  ];

  return (
    <>
      <div>
        <Avatar
          realname="Felipe Aguiar" nickname="@Felipao__DIO🚀" />
      </div>
      <div className="mt-10">
        <FeedGrid items={sampleData} />
      </div>
    </>
  );
}

export default FeedPage;