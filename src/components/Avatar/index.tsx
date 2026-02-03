import defaultAvatar from '../../assets/photo.png';

interface AvatarProps {
  nickname: string;
  realname: string;
  avatarUrl?: string;
  onFollow?: () => void;
  isFollowing?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

function Avatar({
  nickname,
  realname,
  avatarUrl,
  onFollow,
  isFollowing = false,
  size = 'md'
}: AvatarProps) {
  
  // Size-specific styling configurations
  const sizeStyles = {
    sm: {
      image: 'w-12 h-12',
      title: 'text-sm font-semibold',
      name: 'text-xs text-gray-400',
      button: 'w-20 text-xs py-1 px-3',
      spacing: 'mr-3'
    },
    md: {
      image: 'w-24 h-24',
      title: 'text-lg font-semibold',
      name: 'text-base text-gray-400',
      button: 'w-24 text-sm py-2 px-4',
      spacing: 'mr-5'
    },
    lg: {
      image: 'w-32 h-32',
      title: 'text-2xl font-bold',
      name: 'text-lg text-gray-400',
      button: 'w-32 text-base py-3 px-6',
      spacing: 'mr-8'
    }
  };

  const styles = sizeStyles[size];
  const imageSrc = avatarUrl || defaultAvatar;
  
  // Follow button text and styling based on state
  const buttonText = isFollowing ? 'Following' : 'Follow';
  const buttonStyle = isFollowing 
    ? 'bg-gray-600 hover:bg-gray-700 text-white' 
    : 'bg-blue-600 hover:bg-blue-700 text-white';

  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultAvatar;
  };

  return (
    <div className='flex flex-row items-center w-full'>
      <div className={`${styles.spacing}`}>
        <div className='rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] ring-4 ring-red-500'>
          <img
            className={`
              ${styles.image}
              rounded-full
              bg-[#242424]
              object-cover
              transition-transform 
              duration-300 
              ease-in-out
              hover:scale-110
            `}
            src={imageSrc}
            alt={`${nickname}'s profile picture`}
            onError={handleImageError}
          />
        </div>
      </div>

      <div className='flex flex-col justify-center'>
        <div className='text-left'>
          <h1 className={`${styles.title} truncate max-w-xs`}>
            {nickname}
          </h1>
        </div>

        <div className='text-left mt-1'>
          <h2 className={`${styles.name} truncate max-w-xs`}>
            {realname}
          </h2>
        </div>

        <div className='mt-3'>
          <button 
            className={`
              ${styles.button}
              ${buttonStyle}
              rounded-md
              font-medium
              transition-colors
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2
              focus:ring-offset-[#242424]
            `}
            onClick={() => onFollow?.()}
            aria-label={`${isFollowing ? 'Unfollow' : 'Follow'} ${nickname}`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
