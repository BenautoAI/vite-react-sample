import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" colorInput={0} />
      <FeedCard title="Foto Casa" colorInput={1} />
      <FeedCard title="Foto Casa" colorInput={2} />

      <FeedCard title="Foto Casa" colorInput={3} />
      <FeedCard title="Foto Casa" colorInput={4} />
      <FeedCard title="Foto Casa" colorInput={5} />

      <FeedCard title="Foto Casa" colorInput={6} />
      <FeedCard title="Foto Casa" colorInput={7} />
      <FeedCard title="Foto Casa" colorInput={8} />
    </div>

  );
}

export default FeedGrid;