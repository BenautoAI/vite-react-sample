import { useState } from 'react';
import { getInitials, getAvatarColor } from './Avatar.utils';

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showFollowButton?: boolean;
  onFollowClick?: () => void;
  isFollowing?: boolean;
}

const sizeConfig = {
  sm: {
    container: 'w-12 h-12',
    image: 'w-12 h-12',
    border: 'p-[3px]',
    text: 'text-xs',
    nickname: 'text-sm',
    realname: 'text-xs',
    button: 'w-20 h-8 text-xs',
    spacing: 'mr-2',
    textSpacing: 'mt-1'
  },
  md: {
    container: 'w-20 h-20',
    image: 'w-20 h-20',
    border: 'p-[6px]',
    text: 'text-base',
    nickname: 'text-xl',
    realname: 'text-base',
    button: 'w-80 h-10 text-base',
    spacing: 'mr-20',
    textSpacing: 'mt-3'
  },
  lg: {
    container: 'w-32 h-32',
    image: 'w-32 h-32',
    border: 'p-[8px]',
    text: 'text-lg',
    nickname: 'text-2xl',
    realname: 'text-lg',
    button: 'w-96 h-12 text-lg',
    spacing: 'mr-24',
    textSpacing: 'mt-4'
  },
  xl: {
    container: 'w-40 h-40',
    image: 'w-40 h-40',
    border: 'p-[10px]',
    text: 'text-xl',
    nickname: 'text-3xl',
    realname: 'text-xl',
    button: 'w-full h-14 text-xl',
    spacing: 'mr-28',
    textSpacing: 'mt-5'
  }
};

function Avatar({
  nickname,
  realname,
  imageUrl,
  size = 'md',
  showFollowButton = true,
  onFollowClick,
  isFollowing = false
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);
  
  const config = sizeConfig[size];
  
  const handleImageError = () => {
    setImageError(true);
  };

  const handleFollowClick = () => {
    if (onFollowClick) {
      onFollowClick();
    }
  };

  const initials = getInitials(nickname || realname);
  const avatarColor = getAvatarColor(nickname || realname);

  return (
    <div className='avatar__container flex flex-row items-center w-full'>
      <div className={`avatar__photo ${config.spacing}`}>
        <div className={`bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full ${config.border}`}>
          <div className='bg-[#242424] rounded-full'>
            {!imageError && imageUrl ? (
              <img
                className={`rounded-full hover:scale-110 transition-transform duration-300 ease-in-out ${config.image}`}
                src={imageUrl}
                alt={`${realname || nickname}'s avatar`}
                onError={handleImageError}
              />
            ) : (
              <div 
                className={`${config.image} ${avatarColor} rounded-full flex items-center justify-center text-white font-bold ${config.text}`}
                aria-label={`${realname || nickname}'s avatar initials`}
              >
                {initials}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='avatar__texts text-center justify-between'>
        <div className='text__title'>
          <h1 className={config.nickname}>{nickname}</h1>
        </div>

        <div className={`text__name ${config.textSpacing}`}>
          <h2 className={config.realname}>{realname}</h2>
        </div>

        {showFollowButton && (
          <div className='text__follow'>
            <button 
              className={`${config.button} mt-5 ${isFollowing ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded transition-colors duration-200`}
              onClick={handleFollowClick}
              aria-label={isFollowing ? `Unfollow ${realname || nickname}` : `Follow ${realname || nickname}`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Avatar;
