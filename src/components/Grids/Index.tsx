import CardList from '../CardList';

const mockCards = [
  { id: '1', title: 'Foto Casa' },
  { id: '2', title: 'Foto Casa' },
  { id: '3', title: 'Foto Casa' },
  { id: '4', title: 'Foto Casa' },
  { id: '5', title: 'Foto Casa' },
  { id: '6', title: 'Foto Casa' },
  { id: '7', title: 'Foto Casa' },
  { id: '8', title: 'Foto Casa' },
  { id: '9', title: 'Foto Casa' },
];

function FeedGrid() {
  return (
    <CardList items={mockCards} columns={3} gap="gap-4" />
  );
}

export default FeedGrid;