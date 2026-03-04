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
      <h1 className="text-2xl font-bold mb-2">Card List Component</h1>
      <p className="text-gray-600 mb-6">Drag and drop cards to reorder them. Cards will scale up and show a blue ring when hovering over a drop target.</p>
      <CardList items={cardItems} />
    </div>
  );
}
