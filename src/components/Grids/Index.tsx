import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" gradientClass="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500" />
      <FeedCard title="Foto Casa" gradientClass="bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500" />
      <FeedCard title="Foto Casa" gradientClass="bg-gradient-to-br from-orange-400 via-yellow-500 to-amber-500" />

      <FeedCard title="Foto Casa" gradientClass="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600" />
      <FeedCard title="Foto Casa" gradientClass="bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600" />
      <FeedCard title="Foto Casa" gradientClass="bg-gradient-to-br from-rose-400 via-red-500 to-orange-600" />

      <FeedCard title="Foto Casa" gradientClass="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600" />
      <FeedCard title="Foto Casa" gradientClass="bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600" />
      <FeedCard title="Foto Casa" gradientClass="bg-gradient-to-br from-fuchsia-400 via-purple-500 to-indigo-600" />
    </div>

  );
}

export default FeedGrid;