import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-4"
    >
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />

      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />

      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
      <FeedCard title="Foto Casa" />
    </div>

  );
}

export default FeedGrid;