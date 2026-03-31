import { useState } from 'react';

interface FollowButtonProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  onFollow?: () => void;
  isFollowing?: boolean;
}

function FollowButton(props: FollowButtonProps) {
  const [isFollowing, setIsFollowing] = useState(props.isFollowing ?? false);
  const [isLoading, setIsLoading] = useState(props.isLoading ?? false);
  const isDisabled = props.isDisabled ?? false;

  const handleClick = async () => {
    setIsLoading(true);
    try {
      if (props.onFollow) {
        await props.onFollow();
      }
      setIsFollowing(!isFollowing);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`
        followButton__btn
        px-6
        py-2
        font-medium
        rounded-lg
        transition-all
        duration-200
        ${isLoading ? 'followButton__loading opacity-60 cursor-wait' : ''}
        ${isDisabled ? 'followButton__disabled opacity-50 cursor-not-allowed' : ''}
        ${!isLoading && !isDisabled ? 'hover:scale-105 active:scale-95' : ''}
        ${isFollowing 
          ? 'bg-gray-300 text-gray-800' 
          : 'bg-blue-500 text-white hover:bg-blue-600'
        }
      `}
      disabled={isDisabled || isLoading}
      onClick={handleClick}
    >
      {isLoading ? (
        <span className='flex items-center justify-center'>
          <span className='inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2'></span>
          Loading...
        </span>
      ) : isFollowing ? (
        'Following'
      ) : (
        'Follow'
      )}
    </button>
  );
}

export default FollowButton;
