import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color="bg-red-100" />
      <FeedCard title="Foto Casa" color="bg-blue-100" />
      <FeedCard title="Foto Casa" color="bg-green-100" />

      <FeedCard title="Foto Casa" color="bg-yellow-100" />
      <FeedCard title="Foto Casa" color="bg-purple-100" />
      <FeedCard title="Foto Casa" color="bg-pink-100" />

      <FeedCard title="Foto Casa" color="bg-indigo-100" />
      <FeedCard title="Foto Casa" color="bg-orange-100" />
      <FeedCard title="Foto Casa" color="bg-teal-100" />
    </div>

  );
}

export default FeedGrid;