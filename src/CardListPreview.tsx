import CardList from './components/CardList';

function CardListPreview() {
  const sampleCards = [
    { title: 'Card One' },
    { title: 'Card Two' },
    { title: 'Card Three' },
    { title: 'Card Four' },
    { title: 'Card Five' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">CardList Component Preview</h1>
      <CardList cards={sampleCards} />
    </div>
  );
}

export default CardListPreview;
