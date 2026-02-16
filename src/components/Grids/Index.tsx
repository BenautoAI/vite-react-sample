import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color="#ffcccb" />
      <FeedCard title="Foto Casa" color="#add8e6" />
      <FeedCard title="Foto Casa" color="#90ee90" />

      <FeedCard title="Foto Casa" color="#ffb6c1" />
      <FeedCard title="Foto Casa" color="#ffd700" />
      <FeedCard title="Foto Casa" color="#dda0dd" />

      <FeedCard title="Foto Casa" color="#f0e68c" />
      <FeedCard title="Foto Casa" color="#b0c4de" />
      <FeedCard title="Foto Casa" color="#ffa07a" />
    </div>

  );
}

export default FeedGrid;