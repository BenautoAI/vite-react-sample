import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color="border-blue-500" />
      <FeedCard title="Foto Casa" color="border-green-500" />
      <FeedCard title="Foto Casa" color="border-purple-500" />

      <FeedCard title="Foto Casa" color="border-red-500" />
      <FeedCard title="Foto Casa" color="border-yellow-500" />
      <FeedCard title="Foto Casa" color="border-pink-500" />

      <FeedCard title="Foto Casa" color="border-indigo-500" />
      <FeedCard title="Foto Casa" color="border-orange-500" />
      <FeedCard title="Foto Casa" color="border-teal-500" />
    </div>

  );
}

export default FeedGrid;