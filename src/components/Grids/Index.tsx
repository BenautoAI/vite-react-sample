import FeedCard from "../FeedCard";

function FeedGrid() {
  const colors: Array<'blue' | 'green' | 'red' | 'purple' | 'yellow' | 'pink' | 'indigo' | 'cyan' | 'orange'> = [
    'blue',
    'green',
    'red',
    'purple',
    'yellow',
    'pink',
    'indigo',
    'cyan',
    'orange',
  ];

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {colors.map((color, index) => (
        <FeedCard key={index} title="Foto Casa" color={color} />
      ))}
    </div>

  );
}

export default FeedGrid;