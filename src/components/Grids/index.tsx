import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      flex 
      flex-col 
      gap-4
      w-full
      max-w-2xl
      mx-auto"
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
