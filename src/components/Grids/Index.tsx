import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color="bg-gradient-to-br from-pink-400 to-purple-600" />
      <FeedCard title="Foto Casa" color="bg-gradient-to-br from-blue-400 to-cyan-500" />
      <FeedCard title="Foto Casa" color="bg-gradient-to-br from-green-400 to-teal-500" />

      <FeedCard title="Foto Casa" color="bg-gradient-to-br from-orange-400 to-red-500" />
      <FeedCard title="Foto Casa" color="bg-gradient-to-br from-indigo-400 to-purple-500" />
      <FeedCard title="Foto Casa" color="bg-gradient-to-br from-yellow-400 to-orange-500" />

      <FeedCard title="Foto Casa" color="bg-gradient-to-br from-rose-400 to-pink-600" />
      <FeedCard title="Foto Casa" color="bg-gradient-to-br from-emerald-400 to-green-600" />
      <FeedCard title="Foto Casa" color="bg-gradient-to-br from-violet-400 to-purple-600" />
    </div>

  );
}

export default FeedGrid;