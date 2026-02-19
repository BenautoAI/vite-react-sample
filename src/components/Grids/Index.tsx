import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color="#FFE5E5" />
      <FeedCard title="Foto Casa" color="#E5F3FF" />
      <FeedCard title="Foto Casa" color="#FFF4E5" />

      <FeedCard title="Foto Casa" color="#F0E5FF" />
      <FeedCard title="Foto Casa" color="#E5FFEF" />
      <FeedCard title="Foto Casa" color="#FFE5F8" />

      <FeedCard title="Foto Casa" color="#FFF9E5" />
      <FeedCard title="Foto Casa" color="#E5F9FF" />
      <FeedCard title="Foto Casa" color="#F5FFE5" />
    </div>

  );
}

export default FeedGrid;