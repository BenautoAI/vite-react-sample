import FeedCard from "../FeedCard";

function FeedGrid() {
  const colors = [
    'border-l-4 border-red-500',
    'border-l-4 border-blue-500',
    'border-l-4 border-green-500',
    'border-l-4 border-purple-500',
    'border-l-4 border-pink-500',
    'border-l-4 border-yellow-500',
    'border-l-4 border-indigo-500',
    'border-l-4 border-cyan-500',
    'border-l-4 border-orange-500',
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