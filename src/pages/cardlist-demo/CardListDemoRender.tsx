import CardList from "../../components/CardList";

function CardListDemoRender() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Card List Component - Drag & Drop</h1>
      <p className="mb-4 text-gray-700">Drag and drop cards to reorder them. You'll see visual feedback as you drag.</p>
      <CardList />
    </div>
  );
}

export default CardListDemoRender;
