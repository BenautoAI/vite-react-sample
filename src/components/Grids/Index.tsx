import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" colorScheme="teal" />
      <FeedCard title="Foto Casa" colorScheme="blue" />
      <FeedCard title="Foto Casa" colorScheme="purple" />

      <FeedCard title="Foto Casa" colorScheme="pink" />
      <FeedCard title="Foto Casa" colorScheme="orange" />
      <FeedCard title="Foto Casa" colorScheme="green" />

      <FeedCard title="Foto Casa" colorScheme="teal" />
      <FeedCard title="Foto Casa" colorScheme="blue" />
      <FeedCard title="Foto Casa" colorScheme="purple" />
    </div>

  );
}

export default FeedGrid;