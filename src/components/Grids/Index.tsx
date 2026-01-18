import FeedCard from "../FeedCard";

function FeedGrid() {
  const cardColors = [
    'bg-blue-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-yellow-100',
    'bg-pink-100',
    'bg-indigo-100',
    'bg-red-100',
    'bg-teal-100',
    'bg-orange-100'
  ];

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" bgColor={cardColors[0]} />
      <FeedCard title="Foto Casa" bgColor={cardColors[1]} />
      <FeedCard title="Foto Casa" bgColor={cardColors[2]} />

      <FeedCard title="Foto Casa" bgColor={cardColors[3]} />
      <FeedCard title="Foto Casa" bgColor={cardColors[4]} />
      <FeedCard title="Foto Casa" bgColor={cardColors[5]} />

      <FeedCard title="Foto Casa" bgColor={cardColors[6]} />
      <FeedCard title="Foto Casa" bgColor={cardColors[7]} />
      <FeedCard title="Foto Casa" bgColor={cardColors[8]} />
    </div>

  );
}

export default FeedGrid;