import photoPlaceholder from '../../assets/photo.png';

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  showFollowButton?: boolean;
  isVerified?: boolean;
  onFollowClick?: () => void;
}

function Avatar({
  nickname,
  realname,
  imageUrl,
  size = 'md',
  showFollowButton = true,
  isVerified = false,
  onFollowClick
}: AvatarProps) {
  
  // Generate initials from realname for fallback
  const getInitials = (name: string): string => {
    const words = name.trim().split(' ');
    if (words.length >= 2) {
      return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Size variant classes
  const sizeClasses = {
    sm: {
      photo: 'w-12 h-12',
      name: 'text-sm',
      nickname: 'text-xs',
      button: 'w-16 text-xs px-2 py-1 mt-2'
    },
    md: {
      photo: 'w-16 h-16',
      name: 'text-base',
      nickname: 'text-sm',
      button: 'w-20 text-sm px-3 py-1.5 mt-3'
    },
    lg: {
      photo: 'w-24 h-24',
      name: 'text-lg',
      nickname: 'text-base',
      button: 'w-24 text-base px-4 py-2 mt-4'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="avatar__container flex flex-row items-center w-full">
      <div className={`avatar__photo ${size === 'sm' ? 'mr-4' : size === 'md' ? 'mr-5' : 'mr-6'} relative`}>
        {imageUrl || photoPlaceholder ? (
          <img
            className={`
              ${currentSize.photo}
              rounded-full
              object-cover
              transition-transform
              duration-300
              hover:scale-110
              p-[3px]
              bg-gradient-to-r
              from-[#6EE7B7]
              via-[#3B82F6]
              to-[#9333EA]
            `}
            src={imageUrl || photoPlaceholder}
            alt={`${realname}'s profile`}
          />
        ) : (
          <div
            className={`
              ${currentSize.photo}
              rounded-full
              flex
              items-center
              justify-center
              bg-gradient-to-r
              from-[#6EE7B7]
              via-[#3B82F6]
              to-[#9333EA]
              text-white
              font-bold
              ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-xl'}
            `}
          >
            {getInitials(realname)}
          </div>
        )}
      </div>

      <div className="avatar__texts flex flex-col">
        <div className="flex items-center gap-2">
          <h1 className={`font-bold ${currentSize.name}`}>{nickname}</h1>
          {isVerified && (
            <svg
              className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'} text-blue-500`}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-label="Verified badge"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>

        <div className={`text__name ${size === 'sm' ? 'mt-1' : size === 'md' ? 'mt-2' : 'mt-3'}`}>
          <h2 className={`text-gray-600 ${currentSize.nickname}`}>{realname}</h2>
        </div>

        {showFollowButton && (
          <div className="text__follow">
            <button
              className={`
                ${currentSize.button}
                bg-blue-500
                hover:bg-blue-600
                text-white
                rounded-full
                font-medium
                transition-colors
                duration-200
              `}
              onClick={onFollowClick}
              aria-label={`Follow ${realname}`}
            >
              Follow
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Avatar;
