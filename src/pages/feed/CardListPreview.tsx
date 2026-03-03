import CardList from "../../components/CardList";

function CardListPreview() {
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Card List Preview</h1>
      <CardList cards={sampleCards} columns={3} />
    </div>
  );
}

export default CardListPreview;
