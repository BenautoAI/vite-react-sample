import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color="#FFEBEE" />
      <FeedCard title="Foto Casa" color="#E3F2FD" />
      <FeedCard title="Foto Casa" color="#E8F5E9" />

      <FeedCard title="Foto Casa" color="#FFF3E0" />
      <FeedCard title="Foto Casa" color="#F3E5F5" />
      <FeedCard title="Foto Casa" color="#E0F2F1" />

      <FeedCard title="Foto Casa" color="#FFF9C4" />
      <FeedCard title="Foto Casa" color="#FCE4EC" />
      <FeedCard title="Foto Casa" color="#E1F5FE" />
    </div>

  );
}

export default FeedGrid;