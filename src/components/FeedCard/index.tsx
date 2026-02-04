interface FeedProps {
  title: string;
  colorScheme?: 'teal' | 'blue' | 'purple' | 'pink' | 'orange' | 'green';
}

const colorSchemes = {
  teal: 'bg-gradient-to-br from-teal-400 to-cyan-600',
  blue: 'bg-gradient-to-br from-blue-400 to-blue-600',
  purple: 'bg-gradient-to-br from-purple-400 to-purple-600',
  pink: 'bg-gradient-to-br from-pink-400 to-pink-600',
  orange: 'bg-gradient-to-br from-orange-400 to-orange-600',
  green: 'bg-gradient-to-br from-green-400 to-green-600'
};

function FeedCard({ title, colorScheme = 'blue' }: FeedProps) {
  const gradientClass = colorSchemes[colorScheme];

  return (
    <div className={`
      ${gradientClass}
      rounded-lg 
      shadow-md 
      h-96
      transition-transform duration-300 hover:scale-105
      `}>

      <div className="p-4">
        <h2 className="text-lg font-medium text-white">{title}</h2>
        <p className="mt-2 text-sm text-white text-opacity-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;