interface CatImageProps {
  imageUrl?: string;
  altText?: string;
}

function CatImage(props: CatImageProps) {
  return (
    <div className="
      cat-image__container
      flex
      items-center
      justify-center
      w-full
      h-screen
      bg-gradient-to-b from-[#4FC3F7] to-[#29B6F6]
    ">
      <div className="cat-image__wrapper">
        <img
          className="
            cat-image__photo
            max-w-md
            max-h-96
            object-contain
            rounded-lg
            shadow-2xl
            hover:scale-105
            transition-transform
            duration-300
            border-4
            border-red-500
          "
          src={props.imageUrl || "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500"}
          alt={props.altText || "Cute cat waving"}
        />
      </div>
    </div>
  );
}

export default CatImage;
