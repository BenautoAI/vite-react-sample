import FeedCard from "../FeedCard";

function FeedGrid() {
  const colors = [
    'bg-blue-50',
    'bg-green-50',
    'bg-purple-50',
    'bg-pink-50',
    'bg-yellow-50',
    'bg-indigo-50',
    'bg-red-50',
    'bg-orange-50',
    'bg-cyan-50'
  ];

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" bgColor={colors[0]} />
      <FeedCard title="Foto Casa" bgColor={colors[1]} />
      <FeedCard title="Foto Casa" bgColor={colors[2]} />

      <FeedCard title="Foto Casa" bgColor={colors[3]} />
      <FeedCard title="Foto Casa" bgColor={colors[4]} />
      <FeedCard title="Foto Casa" bgColor={colors[5]} />

      <FeedCard title="Foto Casa" bgColor={colors[6]} />
      <FeedCard title="Foto Casa" bgColor={colors[7]} />
      <FeedCard title="Foto Casa" bgColor={colors[8]} />
    </div>

  );
}

export default FeedGrid;