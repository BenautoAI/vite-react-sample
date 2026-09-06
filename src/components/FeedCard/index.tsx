interface FeedCardProps {
  title: string;
  color?: string;
}

/**
 * FeedCard component displaying a photo card with title and description.
 * Supports optional background color customization via Tailwind CSS classes.
 * @param title - The title text displayed in the card
 * @param color - Optional Tailwind CSS background color class (defaults to 'bg-white')
 */
function FeedCard(props: FeedCardProps) {
  const bgColor = props.color || "bg-white";

  return (
    <div className={`${bgColor} h-96 rounded-lg shadow-md`}>
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default FeedCard;