import { useState } from 'react';

interface AvatarProps {
  /** User's display nickname (e.g., "@username") */
  nickname: string;
  /** User's real full name */
  realname: string;
  /** Optional profile image URL. If not provided or fails to load, initials will be shown */
  imageUrl?: string;
  /** Whether the user is currently online */
  isOnline?: boolean;
  /** Display variant: 'minimal' (avatar only), 'with-text' (avatar + names), 'full' (avatar + names + button) */
  variant?: 'minimal' | 'with-text' | 'full';
  /** Callback function when Follow button is clicked */
  onFollowClick?: () => void;
}

/**
 * Generates initials from a full name.
 * For multi-word names, returns first letter of first word + first letter of last word.
 * For single-word names, returns first two letters.
 */
const getInitials = (name: string): string => {
  const trimmedName = name.trim();
  if (!trimmedName) return '??';
  
  const names = trimmedName.split(' ').filter(n => n.length > 0);
  if (names.length >= 2) {
    return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
  }
  return trimmedName.substring(0, 2).toUpperCase();
};

function Avatar(props: AvatarProps) {
  const { 
    nickname, 
    realname, 
    imageUrl, 
    isOnline = false, 
    variant = 'full',
    onFollowClick 
  } = props;
  
  const [imageError, setImageError] = useState(false);
  const showInitials = !imageUrl || imageError;

  return (
    <div 
      className="avatar__container flex flex-row items-center w-full"
    >
      {/* Avatar Photo / Initials with Status Indicator */}
      <div className="avatar__photo mr-6 relative">
        <div className="relative inline-block">
          {/* Gradient border wrapper */}
          <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[3px] rounded-full transition-transform duration-300 hover:scale-110">
            {showInitials ? (
              // Initials fallback
              <div 
                className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold"
                role="img"
                aria-label={`${realname}'s profile avatar showing initials`}
              >
                {getInitials(realname)}
              </div>
            ) : (
              // Profile image
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={imageUrl}
                alt={`${realname}'s profile picture`}
                onError={() => setImageError(true)}
              />
            )}
          </div>
          
          {/* Online/Offline Status Indicator */}
          <div 
            className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white ${
              isOnline ? 'bg-green-500' : 'bg-gray-400'
            }`}
            aria-label={isOnline ? 'Online' : 'Offline'}
            role="status"
          />
        </div>
      </div>

      {/* Text and Button Section (conditional based on variant) */}
      {variant !== 'minimal' && (
        <div className="avatar__texts flex flex-col justify-center">
          {/* Nickname */}
          <div className="text__title">
            <h1 className="text-2xl font-semibold">{nickname}</h1>
          </div>

          {/* Real Name */}
          <div className="text__name mt-2">
            <h2 className="text-lg text-gray-300">{realname}</h2>
          </div>

          {/* Follow Button (only in 'full' variant) */}
          {variant === 'full' && (
            <div className="text__follow mt-4">
              <button 
                className="w-full max-w-xs px-8 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => onFollowClick?.()}
                aria-label={`Follow ${nickname}`}
              >
                Follow
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Avatar;
