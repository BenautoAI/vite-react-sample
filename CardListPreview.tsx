import CardList from "./src/components/CardList";

const sampleCards = [
  { title: "Foto Casa" },
  { title: "Foto Casa" },
  { title: "Foto Casa" },
  { title: "Foto Casa" },
  { title: "Foto Casa" },
];

export default function CardListPreview() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="mb-8 text-2xl font-bold">Card List Component</h1>
      <CardList cards={sampleCards} />
    </div>
  );
}
