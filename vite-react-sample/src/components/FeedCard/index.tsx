interface Photo {
  id: string | number;
  imageUrl: string;
  title?: string;
  description?: string;
}

interface FeedProps {
  photo: Photo;
  onClick?: () => void;
}

function FeedCard({ photo, onClick }: FeedProps) {
  const handleClick = () => {
    onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className="
        bg-white 
        rounded-lg 
        shadow-md 
        overflow-hidden
        cursor-pointer
        transition-transform
        hover:scale-105
        hover:shadow-lg
        focus:outline-none
        focus:ring-2
        focus:ring-primary
      "
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={photo.title || `Photo ${photo.id}`}
    >
      <div className="w-full aspect-square">
        <img
          src={photo.imageUrl}
          alt={photo.title || `Photo ${photo.id}`}
          className="w-full h-full object-cover"
        />
      </div>
      {(photo.title || photo.description) && (
        <div className="p-4">
          {photo.title && (
            <h2 className="text-lg font-medium text-gray-900">{photo.title}</h2>
          )}
          {photo.description && (
            <p className="mt-2 text-sm text-gray-500">{photo.description}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FeedCard;