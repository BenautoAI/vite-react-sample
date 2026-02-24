import FeedCard from "../FeedCard";

function FeedGrid() {
  const colors = [
    '#FFD6E8', // Soft pink
    '#C9E4FF', // Soft blue
    '#D4F1D4', // Soft green
    '#FFF9D6', // Soft yellow
    '#FFE8C9', // Soft peach
    '#E8D4FF', // Soft purple
    '#D4F1E8', // Soft teal
    '#FFD4E8', // Soft rose
    '#D9E8FF', // Soft indigo
  ];
  
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" backgroundColor={colors[0]} />
      <FeedCard title="Foto Casa" backgroundColor={colors[1]} />
      <FeedCard title="Foto Casa" backgroundColor={colors[2]} />

      <FeedCard title="Foto Casa" backgroundColor={colors[3]} />
      <FeedCard title="Foto Casa" backgroundColor={colors[4]} />
      <FeedCard title="Foto Casa" backgroundColor={colors[5]} />

      <FeedCard title="Foto Casa" backgroundColor={colors[6]} />
      <FeedCard title="Foto Casa" backgroundColor={colors[7]} />
      <FeedCard title="Foto Casa" backgroundColor={colors[8]} />
    </div>

  );
}

export default FeedGrid;