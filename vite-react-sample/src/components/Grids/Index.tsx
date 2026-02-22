import FeedCard from "../FeedCard";

interface Photo {
  id: string | number;
  imageUrl: string;
  title?: string;
  description?: string;
}

interface FeedGridProps {
  photos: Photo[];
  onPhotoClick?: (photo: Photo) => void;
}

function FeedGrid({ photos, onPhotoClick }: FeedGridProps) {
  return (
    <div
      className="
        grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-4
      "
    >
      {photos.map((photo) => (
        <FeedCard
          key={photo.id}
          photo={photo}
          onClick={() => onPhotoClick?.(photo)}
        />
      ))}
    </div>
  );
}

export default FeedGrid;