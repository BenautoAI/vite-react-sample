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
      <FeedCard title="Foto Casa" color="#FFF9E5" />

      <FeedCard title="Foto Casa" color="#E5FFE5" />
      <FeedCard title="Foto Casa" color="#FFE5F9" />
      <FeedCard title="Foto Casa" color="#F0E5FF" />

      <FeedCard title="Foto Casa" color="#FFE5CC" />
      <FeedCard title="Foto Casa" color="#E5FFFF" />
      <FeedCard title="Foto Casa" color="#FFE5E5" />
    </div>

  );
}

export default FeedGrid;