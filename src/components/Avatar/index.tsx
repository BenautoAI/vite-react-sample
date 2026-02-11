import { useState } from 'react';

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  onFollowChange?: (isFollowing: boolean) => void;
}

function Avatar(props: AvatarProps) {
  const { nickname, realname, imageUrl, onFollowChange } = props;
  
  const [isFollowing, setIsFollowing] = useState(false);
  const [showImage, setShowImage] = useState(!!imageUrl);

  // Generate initials from nickname and realname
  const getInitials = (nickname: string, realname: string): string => {
    // Remove @ symbol from nickname if present
    const cleanNickname = nickname.replace('@', '').trim();
    
    // Get first letter of nickname
    const nicknameInitial = cleanNickname.charAt(0).toUpperCase();
    
    // Get first letter of realname (first word)
    const realnameInitial = realname.trim().split(' ')[0].charAt(0).toUpperCase();
    
    // Return combination, or fallback to first 2 chars of nickname if realname is empty
    return nicknameInitial && realnameInitial 
      ? nicknameInitial + realnameInitial 
      : cleanNickname.substring(0, 2).toUpperCase();
  };

  const handleFollowClick = () => {
    const newFollowingState = !isFollowing;
    setIsFollowing(newFollowingState);
    onFollowChange?.(newFollowingState);
  };

  const handleImageError = () => {
    setShowImage(false);
  };

  const initials = getInitials(nickname, realname);

  return (
    <div className='
      avatar__container 
      flex 
      flex-row
      items-center
      w-full
      '>

      <div className='avatar__photo mr-20'>
        {showImage && imageUrl ? (
          <img
            className='
              rounded-full
              hover:scale-110
              transition-transform
              duration-300
              ease-in-out
              w-24
              h-24
              object-cover
              border-4
              border-red-500
            '
            src={imageUrl}
            alt={`${realname}'s avatar`}
            onError={handleImageError}
          />
        ) : (
          <div 
            className='
              rounded-full
              w-24
              h-24
              flex
              items-center
              justify-center
              bg-gradient-to-r
              from-[#6EE7B7]
              via-[#3B82F6]
              to-[#9333EA]
              hover:scale-110
              transition-transform
              duration-300
              ease-in-out
              cursor-pointer
              border-4
              border-red-500
            '
          >
            <span className='text-white text-2xl font-bold'>
              {initials}
            </span>
          </div>
        )}
      </div>

      <div className='avatar__texts text-center justify-between'>

        <div className='text__title'>
          <h1 className='text-lg font-semibold'>{nickname}</h1>
        </div>

        <div className='text__name mt-3'>
          <h2 className='text-base text-gray-600'>{realname}</h2>
        </div>

        <div className='text__follow'>
          <button 
            className={`
              w-80 
              mt-5 
              px-4 
              py-2 
              rounded
              font-medium
              transition-colors
              duration-200
              ${isFollowing 
                ? 'bg-gray-300 text-gray-700 hover:bg-gray-400' 
                : 'bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-white hover:opacity-90'
              }
            `}
            onClick={handleFollowClick}
            aria-label={isFollowing ? `Unfollow ${realname}` : `Follow ${realname}`}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>

      </div>

    </div>
  );
}

export default Avatar;
