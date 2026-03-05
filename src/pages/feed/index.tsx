import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

interface CardItem {
  id: string;
  title: string;
  description: string;
}

function FeedPage() {
  const sampleCards: CardItem[] = [
    {
      id: "1",
      title: "Foto Casa",
      description: "Beautiful house exterior with modern architecture and landscaping."
    },
    {
      id: "2",
      title: "Foto Casa",
      description: "Cozy living room with natural lighting and comfortable furniture."
    },
    {
      id: "3",
      title: "Foto Casa",
      description: "Elegant bedroom design with contemporary decor and soft textures."
    },
    {
      id: "4",
      title: "Foto Casa",
      description: "Spacious kitchen with state-of-the-art appliances and granite countertops."
    },
    {
      id: "5",
      title: "Foto Casa",
      description: "Relaxing outdoor patio with stone flooring and garden views."
    },
    {
      id: "6",
      title: "Foto Casa",
      description: "Modern bathroom with luxury fixtures and marble tile work."
    },
    {
      id: "7",
      title: "Foto Casa",
      description: "Home office setup with natural wood desk and wall shelving."
    },
    {
      id: "8",
      title: "Foto Casa",
      description: "Dining area with elegant table setting and ambient lighting."
    },
    {
      id: "9",
      title: "Foto Casa",
      description: "Front entrance with stylish door frame and welcoming landscape."
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