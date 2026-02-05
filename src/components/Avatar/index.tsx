import { useState } from 'react';

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  size?: 'small' | 'medium' | 'large';
  showFollowButton?: boolean;
  onFollowClick?: () => void;
  className?: string;
}

function Avatar({
  nickname,
  realname,
  imageUrl = '/src/assets/photo.png',
  size = 'medium',
  showFollowButton = true,
  onFollowClick,
  className = ''
}: AvatarProps) {
  const [imgSrc, setImgSrc] = useState<string>(imageUrl);

  const handleImageError = () => {
    // Fallback to default avatar or initials placeholder
    setImgSrc('/src/assets/photo.png');
  };

  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-20 h-20',
    large: 'w-32 h-32'
  };

  const followButtonSizes = {
    small: 'w-16 text-xs',
    medium: 'w-20 text-sm',
    large: 'w-24 text-base'
  };

  return (
    <div className={`avatar__container flex flex-row items-center w-full ${className}`}>
      <div className='avatar__photo mr-4 sm:mr-8 md:mr-12 lg:mr-20'>
        <div className='bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] rounded-full ring-4 ring-red-500'>
          <img
            className={`${
              sizeClasses[size]
            } rounded-full object-cover bg-white transition-transform duration-300 hover:scale-110`}
            src={imgSrc}
            alt={`${realname}'s profile picture`}
            onError={handleImageError}
            loading='lazy'
          />
        </div>
      </div>

      <div className='avatar__texts flex flex-col items-start'>
        <div className='text__title'>
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold truncate max-w-xs' aria-label={`Nickname: ${nickname}`}>
            {nickname}
          </h1>
        </div>

        <div className='text__name mt-1 sm:mt-2'>
          <h2 className='text-sm sm:text-base md:text-lg text-gray-600 truncate max-w-xs'>
            {realname}
          </h2>
        </div>

        {showFollowButton && (
          <div className='text__follow'>
            <button
              className={`${
                followButtonSizes[size]
              } mt-3 sm:mt-4 md:mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}
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