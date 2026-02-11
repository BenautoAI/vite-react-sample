import defaultAvatar from '../../assets/photo.png';

/**
 * Avatar component displays user profile information with an image, nickname, real name, and follow button.
 * Supports different sizes, hover effects, and accessibility features.
 */
interface AvatarProps {
  /** User's display nickname (e.g., "@username") */
  nickname: string;
  /** User's real name */
  realname: string;
  /** Optional profile image URL. Falls back to default avatar if not provided */
  imageUrl?: string;
  /** Whether the user is currently being followed */
  isFollowing?: boolean;
  /** Callback fired when the follow button is clicked */
  onFollowClick?: () => void;
  /** Size variant for the avatar component */
  size?: 'sm' | 'md' | 'lg';
}

function Avatar(props: AvatarProps) {
  const {
    nickname,
    realname,
    imageUrl,
    isFollowing = false,
    onFollowClick,
    size = 'md'
  } = props;

  // Size configurations
  const sizeConfig = {
    sm: {
      container: 'gap-3',
      image: 'w-12 h-12',
      nickname: 'text-sm',
      realname: 'text-xs',
      button: 'text-xs px-4 py-1.5 mt-2'
    },
    md: {
      container: 'gap-5',
      image: 'w-16 h-16',
      nickname: 'text-base',
      realname: 'text-sm',
      button: 'text-sm px-6 py-2 mt-3'
    },
    lg: {
      container: 'gap-6',
      image: 'w-20 h-20',
      nickname: 'text-lg',
      realname: 'text-base',
      button: 'text-base px-8 py-2.5 mt-4'
    }
  };

  const config = sizeConfig[size];

  return (
    <div
      className={`avatar__container flex flex-row items-center w-full ${config.container}`}
    >
      <div className="avatar__photo relative">
        <div className="border-4 border-red-500 p-0 rounded-full">
          <img
            className={`${config.image} rounded-full object-cover bg-white hover:scale-110 transition-transform duration-300 ease-in-out`}
            src={imageUrl || defaultAvatar}
            alt={`${realname}'s profile picture`}
            loading="lazy"
          />
        </div>
      </div>

      <div className="avatar__texts flex flex-col justify-center">
        <div className="text__title">
          <h1 className={`font-semibold ${config.nickname} truncate max-w-[200px]`}>
            {nickname}
          </h1>
        </div>

        <div className="text__name mt-1">
          <h2 className={`text-gray-600 dark:text-gray-400 ${config.realname} truncate max-w-[200px]`}>
            {realname}
          </h2>
        </div>

        {onFollowClick && (
          <div className="text__follow">
            <button
              onClick={onFollowClick}
              className={`${config.button} rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isFollowing
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-400'
                  : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400'
              }`}
              aria-label={isFollowing ? `Unfollow ${realname}` : `Follow ${realname}`}
              aria-pressed={isFollowing}
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