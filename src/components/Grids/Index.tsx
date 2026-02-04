import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color="#3b82f6" />
      <FeedCard title="Foto Casa" color="#10b981" />
      <FeedCard title="Foto Casa" color="#f59e0b" />

      <FeedCard title="Foto Casa" color="#ef4444" />
      <FeedCard title="Foto Casa" color="#8b5cf6" />
      <FeedCard title="Foto Casa" color="#ec4899" />

      <FeedCard title="Foto Casa" color="#06b6d4" />
      <FeedCard title="Foto Casa" color="#14b8a6" />
      <FeedCard title="Foto Casa" color="#f97316" />
    </div>

  );
}

export default FeedGrid;