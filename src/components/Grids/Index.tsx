import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color="#FECACA" />
      <FeedCard title="Foto Casa" color="#FED7AA" />
      <FeedCard title="Foto Casa" color="#FDE68A" />

      <FeedCard title="Foto Casa" color="#BBF7D0" />
      <FeedCard title="Foto Casa" color="#A5F3FC" />
      <FeedCard title="Foto Casa" color="#BFDBFE" />

      <FeedCard title="Foto Casa" color="#DDD6FE" />
      <FeedCard title="Foto Casa" color="#FBCFE8" />
      <FeedCard title="Foto Casa" color="#E9D5FF" />
    </div>

  );
}

export default FeedGrid;