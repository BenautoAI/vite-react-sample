import { useState } from 'react';

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  size?: 'small' | 'medium' | 'large';
  onFollowClick?: () => void;
}

function Avatar({
  nickname,
  realname,
  imageUrl,
  size = 'medium',
  onFollowClick
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  // Helper function to get initials from realname
  const getInitials = (name: string): string => {
    const trimmedName = name.trim();
    if (!trimmedName) return '?';
    
    const names = trimmedName.split(' ');
    if (names.length >= 2) {
      return (names[0][0] + names[names.length - 1][0]).toUpperCase();
    }
    return trimmedName.substring(0, 2).toUpperCase();
  };

  // Size-specific styles
  const sizeClasses = {
    small: {
      photo: 'w-12 h-12',
      nicknameText: 'text-sm',
      realnameText: 'text-xs',
      buttonWidth: 'w-24',
      spacing: 'mr-3',
      buttonMargin: 'mt-2',
      initialsText: 'text-lg'
    },
    medium: {
      photo: 'w-20 h-20',
      nicknameText: 'text-base',
      realnameText: 'text-sm',
      buttonWidth: 'w-32',
      spacing: 'mr-5',
      buttonMargin: 'mt-3',
      initialsText: 'text-2xl'
    },
    large: {
      photo: 'w-30 h-30',
      nicknameText: 'text-xl',
      realnameText: 'text-lg',
      buttonWidth: 'w-40',
      spacing: 'mr-6',
      buttonMargin: 'mt-4',
      initialsText: 'text-4xl'
    }
  };

  const currentSize = sizeClasses[size];
  const showInitials = !imageUrl || imageError;

  return (
    <div className="avatar__container flex flex-row items-center w-full">
      <div className={`avatar__photo ${currentSize.spacing}`}>
        <div className="rounded-full hover:scale-110 transition-transform duration-300 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          {showInitials ? (
            <div
              className={`${currentSize.photo} rounded-full bg-white flex items-center justify-center ${currentSize.initialsText} font-bold text-gray-700`}
            >
              {getInitials(realname)}
            </div>
          ) : (
            <img
              className={`${currentSize.photo} rounded-full bg-white object-cover`}
              src={imageUrl}
              alt={realname}
              onError={() => setImageError(true)}
            />
          )}
        </div>
      </div>

      <div className="avatar__texts text-center justify-between">
        <div className="text__title">
          <h1 className={currentSize.nicknameText}>{nickname}</h1>
        </div>

        <div className={`text__name ${currentSize.buttonMargin}`}>
          <h2 className={currentSize.realnameText}>{realname}</h2>
        </div>

        <div className="text__follow">
          <button
            className={`${currentSize.buttonWidth} ${currentSize.buttonMargin}`}
            onClick={onFollowClick}
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
