interface CatImageProps {
  imageUrl?: string;
  alt?: string;
  backgroundColor?: string;
}

function CatImage(props: CatImageProps) {
  const {
    imageUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23e0e0e0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23666'%3E🐱 Cat Image%3C/text%3E%3C/svg%3E",
    alt = "Playful cat with raised paw",
    backgroundColor = "#00B4D8"
  } = props;

  return (
    <div 
      className="
        relative
        w-full
        h-96
        rounded-lg
        shadow-lg
        overflow-hidden
        flex
        items-center
        justify-center
      "
      style={{ backgroundColor }}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="
          max-w-full
          max-h-full
          object-contain
          transition-transform
          duration-300
          hover:scale-105
        "
      />
    </div>
  );
}

export default CatImage;
