interface FeedProps {
  title: string;
  color?: string;
}

function FeedCard(props: FeedProps) {
  const colorClass = props.color || 'bg-gradient-to-br from-purple-400 to-pink-400';
  
  return (
    <div className={`
      ${colorClass}
      rounded-lg 
      shadow-md 
      h-96
      `}>

      <div className="p-4">
        <h2 className="text-lg font-medium text-white">{props.title}</h2>
        <p className="mt-2 text-sm text-white text-opacity-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;