interface FeedProps {
  title: string;
  color?: string;
}

function FeedCard(props: FeedProps) {
  const { title, color } = props;
  const defaultColor = 'bg-white';
  const bgColorClass = color || defaultColor;

  return (
    <div className={`
      ${bgColorClass}
      rounded-lg 
      shadow-md 
      h-96
      transition-transform 
      duration-300 
      hover:scale-105
      `}>

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;