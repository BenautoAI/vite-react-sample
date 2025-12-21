import CatCard from '../../components/CatCard';

function CatPage() {
  return (
    <div className="
      catpage__container
      flex
      flex-col
      items-center
      justify-center
      min-h-screen
      p-8
      gap-8
    ">
      <div className="catpage__header text-center mb-4">
        <h1 className="text-4xl font-bold mb-2">Playful Cat Card</h1>
        <p className="text-gray-600">A cheerful cat greeting you with a wave!</p>
      </div>

      <div className="catpage__card-wrapper">
        <CatCard />
      </div>

      <div className="catpage__description text-center max-w-2xl">
        <p className="text-gray-500">
          This card features a cute cat with its paw raised against a vibrant blue background.
          Perfect for adding a touch of playfulness to your UI!
        </p>
      </div>
    </div>
  );
}

export default CatPage;
