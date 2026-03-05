import FeedList from '../src/components/FeedList';

export default function Preview() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Drag and Drop Feed List</h1>
      <FeedList />
    </div>
  );
}
