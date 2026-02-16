interface FeedProps {
  title: string;
  color?: 'blue' | 'purple' | 'pink' | 'green' | 'orange' | 'red';
}

function FeedCard({ title, color = 'blue' }: FeedProps) {
  // Define gradient color schemes
  const colorSchemes = {
    blue: 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600',
    purple: 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600',
    pink: 'bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600',
    green: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
    orange: 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600',
    red: 'bg-gradient-to-br from-red-400 via-red-500 to-red-600'
  };

  return (
    <div className={`
      ${colorSchemes[color]}
      rounded-lg 
      shadow-lg 
      h-96
      transform
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-xl
      `}>

      <div className="p-4">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="mt-2 text-sm text-white/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;