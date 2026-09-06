interface FeedCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

/**
 * FeedCard component displays a content card with an image, title, and description.
 * Features hover effects with scale transformation and shadow elevation.
 * Designed for responsive grid layouts similar to Instagram or TikTok profile grids.
 *
 * @param title - The card title displayed prominently
 * @param description - Brief description or content preview
 * @param imageUrl - URL or path to the preview image
 */
function FeedCard(props: FeedCardProps) {
  return (
    <div
      className="
        bg-white 
        rounded-lg 
        shadow-md 
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
        focus:outline-none
        focus:ring-2
        focus:ring-primary
        focus:ring-offset-2
      "
      tabIndex={0}
      role="button"
      aria-label={`View ${props.title}`}
    >
      {/* Image Container with Aspect Ratio */}
      <div className="relative aspect-square w-full bg-gray-200">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {props.title}
        </h2>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default FeedCard;