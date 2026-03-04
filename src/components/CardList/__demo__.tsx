import CardList from "./index";

export default function CardListDemo() {
  const cardItems = [
    "Foto Casa",
    "Foto Casa",
    "Foto Casa",
    "Foto Casa",
    "Foto Casa",
    "Foto Casa",
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Card List Component</h1>
      <CardList items={cardItems} />
    </div>
  );
}
