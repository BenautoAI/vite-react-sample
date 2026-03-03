import CardList from './components/CardList';

export default function CardListPreview() {
  const sampleCards = [
    { title: 'Foto Casa' },
    { title: 'Foto Casa' },
    { title: 'Foto Casa' },
    { title: 'Foto Casa' },
    { title: 'Foto Casa' },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">CardList Component</h1>
      <CardList cards={sampleCards} />
    </div>
  );
}
