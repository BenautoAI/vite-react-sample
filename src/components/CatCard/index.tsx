interface CatCardProps {
  imageUrl?: string;
  altText?: string;
}

function CatCard(props: CatCardProps) {
  const defaultImage = "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80";
  const defaultAlt = "Playful cat waving paw";

  return (
    <div className="
      catcard__container
      bg-gradient-to-b 
      from-[#4DB8E8] 
      to-[#2A9FD6]
      rounded-xl
      shadow-lg
      overflow-hidden
      w-full
      max-w-md
      h-96
      flex
      items-center
      justify-center
      p-8
      hover:shadow-2xl
      transition-shadow
      duration-300
    ">
      <div className="catcard__image-wrapper flex items-center justify-center">
        <img
          className="
            catcard__image
            w-full
            h-full
            object-contain
            max-h-80
          "
          src={props.imageUrl || defaultImage}
          alt={props.altText || defaultAlt}
        />
      </div>
    </div>
  );
}

export default CatCard;
