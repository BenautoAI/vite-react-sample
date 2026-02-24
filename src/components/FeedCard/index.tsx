interface FeedProps {
  title: string;
  gradientClass?: string;
}

function FeedCard(props: FeedProps) {
  const baseClasses = 'rounded-lg shadow-md h-96';
  const cardClasses = props.gradientClass ? `${baseClasses} ${props.gradientClass}` : `${baseClasses} bg-white`;
  return (
    <div className={cardClasses}>

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;