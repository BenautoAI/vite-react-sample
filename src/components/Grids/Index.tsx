import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color="blue" />
      <FeedCard title="Foto Casa" color="purple" />
      <FeedCard title="Foto Casa" color="pink" />

      <FeedCard title="Foto Casa" color="green" />
      <FeedCard title="Foto Casa" color="orange" />
      <FeedCard title="Foto Casa" color="red" />

      <FeedCard title="Foto Casa" color="blue" />
      <FeedCard title="Foto Casa" color="purple" />
      <FeedCard title="Foto Casa" color="pink" />
    </div>

  );
}

export default FeedGrid;