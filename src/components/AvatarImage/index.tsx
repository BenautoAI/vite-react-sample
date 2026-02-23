import { useState, useRef } from 'react';

interface AvatarImageProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

function AvatarImage(props: AvatarImageProps) {
  const [hasError, setHasError] = useState(false);
  const isLoadingRef = useRef(true);

  const sizeMap = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-56 h-56',
    xl: 'w-80 h-80',
  };

  const size = props.size || 'lg';
  const sizeClasses = sizeMap[size];

  const handleImageLoad = () => {
    isLoadingRef.current = false;
  };

  const handleImageError = () => {
    isLoadingRef.current = false;
    setHasError(true);
  };

  return (
    <div
      className={`
        avatar-image__container
        flex
        items-center
        justify-center
        ${sizeClasses}
        rounded-full
        bg-gradient-to-br
        from-[#6EE7B7]
        via-[#3B82F6]
        to-[#9333EA]
        p-1
        hover:scale-110
        transition-transform
        duration-300
        ${props.className || ''}
      `}
    >
      <div
        className={`
          avatar-image__inner
          w-full
          h-full
          rounded-full
          bg-white
          overflow-hidden
          flex
          items-center
          justify-center
        `}
      >
        {!hasError && props.src ? (
          <img
            src={props.src}
            alt={props.alt || 'Avatar'}
            className="
              w-full
              h-full
              object-cover
            "
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div
            className="
              flex
              items-center
              justify-center
              w-full
              h-full
              bg-gray-300
              text-gray-600
              text-sm
              font-medium
            "
          >
            {props.alt ? props.alt.charAt(0).toUpperCase() : 'A'}
          </div>
        )}
      </div>
    </div>
  );
}

export default AvatarImage;
