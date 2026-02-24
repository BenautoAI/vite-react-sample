interface FeedProps {
  title: string;
  color?: 'blue' | 'green' | 'red' | 'purple' | 'yellow' | 'pink' | 'indigo' | 'cyan' | 'orange';
}

function FeedCard(props: FeedProps) {
  // Define color schemes for each variant
  const colorSchemes = {
    blue: 'bg-blue-50 border-l-4 border-blue-500',
    green: 'bg-green-50 border-l-4 border-green-500',
    red: 'bg-red-50 border-l-4 border-red-500',
    purple: 'bg-purple-50 border-l-4 border-purple-500',
    yellow: 'bg-yellow-50 border-l-4 border-yellow-500',
    pink: 'bg-pink-50 border-l-4 border-pink-500',
    indigo: 'bg-indigo-50 border-l-4 border-indigo-500',
    cyan: 'bg-cyan-50 border-l-4 border-cyan-500',
    orange: 'bg-orange-50 border-l-4 border-orange-500',
  };

  const cardColorClass = props.color ? colorSchemes[props.color] : 'bg-white';

  const textColorSchemes = {
    blue: 'text-blue-900',
    green: 'text-green-900',
    red: 'text-red-900',
    purple: 'text-purple-900',
    yellow: 'text-yellow-900',
    pink: 'text-pink-900',
    indigo: 'text-indigo-900',
    cyan: 'text-cyan-900',
    orange: 'text-orange-900',
  };

  const textColorClass = props.color ? textColorSchemes[props.color] : 'text-gray-900';
  const descriptionColorClass = props.color ? 'text-gray-700' : 'text-gray-500';

  return (
    <div className={`
      ${cardColorClass} 
      rounded-lg 
      shadow-md 
      h-96
      `}>

      <div className="p-4">
        <h2 className={`text-lg font-medium ${textColorClass}`}>{props.title}</h2>
        <p className={`mt-2 text-sm ${descriptionColorClass}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;