import Avatar from "../../components/Avatar"
import FeedGrid from "../../components/Grids/Index"

interface CardItem {
  title: string;
  description?: string;
}

function FeedPage() {
  const sampleCards: CardItem[] = [
    {
      title: "Foto Casa",
      description: "Beautiful architectural photography showcasing modern home design and interior aesthetics."
    },
    {
      title: "Foto Casa",
      description: "Stunning residence with contemporary style, featuring spacious living areas and natural lighting."
    },
    {
      title: "Foto Casa",
      description: "Elegant home design with sophisticated color palettes and premium interior furnishings."
    },
    {
      title: "Foto Casa",
      description: "Modern minimalist architecture with open floor plans and seamless indoor-outdoor living."
    },
    {
      title: "Foto Casa",
      description: "Luxury residence with state-of-the-art amenities and high-end finishes throughout."
    },
    {
      title: "Foto Casa",
      description: "Contemporary home design with smart technologies and sustainable building materials."
    },
    {
      title: "Foto Casa",
      description: "Charming property with classic architecture and timeless interior design elements."
    },
    {
      title: "Foto Casa",
      description: "Spacious family home featuring large windows, bright interiors, and modern conveniences."
    },
    {
      title: "Foto Casa",
      description: "Sophisticated urban apartment with sleek design, premium fixtures, and panoramic views."
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