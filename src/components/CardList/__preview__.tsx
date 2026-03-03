import CardList from "./index";

export default function CardListPreview() {
  const sampleCards = [
    {
      id: 1,
      title: "Foto Casa",
      description: "Beautiful apartment showcase with stunning interior design"
    },
    {
      id: 2,
      title: "Foto Casa",
      description: "Modern living room with natural lighting and elegant furniture"
    },
    {
      id: 3,
      title: "Foto Casa",
      description: "Contemporary kitchen design with premium appliances"
    },
    {
      id: 4,
      title: "Foto Casa",
      description: "Spacious bedroom with comfortable setup and warm ambiance"
    },
    {
      id: 5,
      title: "Foto Casa",
      description: "Luxury bathroom with modern fixtures and spa-like atmosphere"
    },
    {
      id: 6,
      title: "Foto Casa",
      description: "Outdoor terrace with panoramic views and relaxation area"
    },
    {
      id: 7,
      title: "Foto Casa",
      description: "Home office space designed for productivity and comfort"
    },
    {
      id: 8,
      title: "Foto Casa",
      description: "Cozy reading nook with natural light and shelving"
    },
    {
      id: 9,
      title: "Foto Casa",
      description: "Entryway with elegant design and welcoming atmosphere"
    }
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">CardList Component - 3 Columns</h1>
      <CardList cards={sampleCards} columns={3} />
      
      <h2 className="text-2xl font-bold mt-12 mb-6">CardList - 2 Columns</h2>
      <CardList cards={sampleCards.slice(0, 4)} columns={2} />
      
      <h2 className="text-2xl font-bold mt-12 mb-6">CardList - 1 Column</h2>
      <CardList cards={sampleCards.slice(0, 2)} columns={1} />
    </div>
  );
}
