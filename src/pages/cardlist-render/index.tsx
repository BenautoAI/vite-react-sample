import CardList from "../../components/CardList";

function CardListRenderPage() {
  const sampleCards = [
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
    { title: "Foto Casa" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="mb-8 text-2xl font-bold">Card List Component</h1>
      <div className="max-w-2xl">
        <CardList cards={sampleCards} />
      </div>
    </div>
  );
}

export default CardListRenderPage;
