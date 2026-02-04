interface FeedProps {
  title: string;
  color?: string;
}

function FeedCard(props: FeedProps) {
  const borderColor = props.color || 'border-gray-200';
  
  return (
    <div className={`
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      border-t-4
      ${borderColor}
      `}>

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;