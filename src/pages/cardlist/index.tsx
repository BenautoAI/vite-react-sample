import CardList from "../../components/CardList";

function CardListPage() {
  const sampleCards = [
    { id: "1", title: "Foto Casa" },
    { id: "2", title: "Foto Praia" },
    { id: "3", title: "Foto Montanha" },
    { id: "4", title: "Foto Cidade" },
    { id: "5", title: "Foto Floresta" },
    { id: "6", title: "Foto Lago" },
  ];

  return (
    <div className="w-full p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Card List</h1>
      <CardList items={sampleCards} />
    </div>
  );
}

export default CardListPage;
