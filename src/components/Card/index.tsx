interface CardProps {
  image: string;
  title: string;
  description?: string;
  borderColor?: 'gradient-purple' | 'gradient-blue' | 'gradient-green';
}

function Card(props: CardProps) {
  const getBorderStyles = (color?: string) => {
    switch (color) {
      case 'gradient-purple':
        return 'from-[#9333EA] via-[#3B82F6] to-[#6EE7B7]';
      case 'gradient-blue':
        return 'from-[#3B82F6] via-[#6EE7B7] to-[#9333EA]';
      case 'gradient-green':
        return 'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]';
      default:
        return 'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]';
    }
  };

  return (
    <div className="
      card__container
      bg-white
      rounded-lg
      shadow-md
      p-4
      hover:shadow-lg
      transition-shadow
      duration-300
    ">
      <div className="
        card__image-wrapper
        mb-4
        flex
        justify-center
      ">
        <div className={`
          bg-gradient-to-r
          ${getBorderStyles(props.borderColor)}
          p-1
          rounded-full
        `}>
          <img
            className="
              rounded-full
              w-40
              h-40
              object-cover
            "
            src={props.image}
            alt={props.title}
          />
        </div>
      </div>

      <div className="
        card__content
        text-center
      ">
        <h3 className="
          text-lg
          font-medium
          text-gray-900
          mb-2
        ">
          {props.title}
        </h3>
        
        {props.description && (
          <p className="
            text-sm
            text-gray-500
            line-clamp-3
          ">
            {props.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
