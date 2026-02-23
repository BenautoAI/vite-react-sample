import FeedCard from "../FeedCard";

function FeedGrid() {
  const colors = [
    'bg-blue-100',
    'bg-pink-100',
    'bg-purple-100',
    'bg-green-100',
    'bg-yellow-100',
    'bg-red-100',
    'bg-indigo-100',
    'bg-cyan-100',
    'bg-orange-100',
  ];

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color={colors[0]} />
      <FeedCard title="Foto Casa" color={colors[1]} />
      <FeedCard title="Foto Casa" color={colors[2]} />

      <FeedCard title="Foto Casa" color={colors[3]} />
      <FeedCard title="Foto Casa" color={colors[4]} />
      <FeedCard title="Foto Casa" color={colors[5]} />

      <FeedCard title="Foto Casa" color={colors[6]} />
      <FeedCard title="Foto Casa" color={colors[7]} />
      <FeedCard title="Foto Casa" color={colors[8]} />
    </div>

  );
}

export default FeedGrid;