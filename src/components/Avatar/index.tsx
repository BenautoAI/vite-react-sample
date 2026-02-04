import { useState } from "react"

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  showFollowButton?: boolean;
  onFollowClick?: () => void;
}

/**
 * Generates initials from a full name
 * @param name - The full name to extract initials from
 * @returns Uppercase initials (e.g., "FA" for "Felipe Aguiar")
 */
const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0 || !name.trim()) return '?';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

function Avatar(props: AvatarProps) {
  const {
    nickname,
    realname,
    imageUrl,
    size = 'md',
    showFollowButton = true,
    onFollowClick
  } = props;

  const [imageError, setImageError] = useState(false);

  // Size variant mappings
  const sizeClasses = {
    sm: {
      image: 'w-12 h-12',
      nickname: 'text-lg',
      realname: 'text-sm',
      button: 'w-60 text-sm',
      spacing: 'mr-4',
      initials: 'text-xl'
    },
    md: {
      image: 'w-20 h-20',
      nickname: 'text-2xl',
      realname: 'text-base',
      button: 'w-80',
      spacing: 'mr-6',
      initials: 'text-3xl'
    },
    lg: {
      image: 'w-32 h-32',
      nickname: 'text-4xl',
      realname: 'text-xl',
      button: 'w-96 text-lg',
      spacing: 'mr-8',
      initials: 'text-5xl'
    }
  };

  const currentSizeClasses = sizeClasses[size];
  const showInitials = !imageUrl || imageError;

  return (
    <div className='
      avatar__container 
      flex 
      flex-row
      items-center
      w-full
      '>

      <div className={`avatar__photo ${currentSizeClasses.spacing}`}>
        {showInitials ? (
          <div
            className={`
              rounded-full
              transition-transform
              duration-200
              hover:scale-110
              bg-gradient-to-r
              p-[6px]
              from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
              flex
              items-center
              justify-center
              ${currentSizeClasses.image}
            `}
            role="img"
            aria-label={`${realname}'s profile picture showing initials`}
          >
            <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
              <span className={`font-bold text-gray-700 ${currentSizeClasses.initials}`}>
                {getInitials(realname)}
              </span>
            </div>
          </div>
        ) : (
          <div
            className={`
              rounded-full
              transition-transform
              duration-200
              hover:scale-110
              bg-gradient-to-r
              p-[6px]
              from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
              ${currentSizeClasses.image}
            `}
          >
            <img
              className={`
                rounded-full
                w-full
                h-full
                object-cover
              `}
              src={imageUrl}
              alt={`${realname}'s profile picture`}
              onError={() => setImageError(true)}
            />
          </div>
        )}
      </div>

      <div className='avatar__texts text-center justify-between'>

        <div className='text__title'>
          <h1 className={currentSizeClasses.nickname}>{nickname}</h1>
        </div>

        <div className='text__name mt-3'>
          <h2 className={currentSizeClasses.realname}>{realname}</h2>
        </div>

        {showFollowButton && (
          <div className='text__follow'>
            <button 
              className={`${currentSizeClasses.button} mt-5`}
              onClick={onFollowClick}
              aria-label={`Follow ${nickname}`}
            >
              Follow
            </button>
          </div>
        )}

      </div>

    </div>
  );
}

export default Avatar
