import { useState } from "react";

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  isOnline?: boolean;
  initialFollowState?: boolean;
  onFollowToggle?: (isFollowing: boolean) => void;
}

/**
 * Smart avatar component that auto-generates initials when no image is available,
 * displays follow/unfollow state dynamically, and shows visual indicators for online status.
 *
 * @param props - Component props
 * @param props.nickname - User's nickname/handle
 * @param props.realname - User's real name for initials generation
 * @param props.imageUrl - Optional custom avatar image URL
 * @param props.isOnline - Online status indicator (default: false)
 * @param props.initialFollowState - Initial follow state (default: false)
 * @param props.onFollowToggle - Callback when follow state changes
 */
function Avatar(props: AvatarProps) {
  const [isFollowing, setIsFollowing] = useState(
    props.initialFollowState ?? false,
  );
  const [imageError, setImageError] = useState(false);

  /**
   * Generate initials from user's real name.
   * Extracts first letter of first and last name.
   */
  const getInitials = (name: string): string => {
    const parts = name.trim().split(" ");
    const first = parts[0]?.[0] || "";
    const last = parts[parts.length - 1]?.[0] || "";
    return (first + last).toUpperCase();
  };

  const handleFollowClick = () => {
    const newFollowState = !isFollowing;
    setIsFollowing(newFollowState);
    props.onFollowToggle?.(newFollowState);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const showInitials = !props.imageUrl || imageError;
  const initials = getInitials(props.realname);

  return (
    <div
      className="
      avatar__container 
      flex 
      flex-row
      items-center
      w-full
      "
    >
      <div className="avatar__photo mr-20 relative">
        {showInitials ? (
          <div
            className="
            w-24 h-24
            rounded-full
            bg-gradient-to-r 
            from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
            flex items-center justify-center
            text-white text-2xl font-bold
            hover:scale-110
            transition-transform
            "
          >
            {initials}
          </div>
        ) : (
          <img
            className="
            w-24 h-24
            rounded-full
            hover:scale-110
            transition-transform
            bg-gradient-to-r 
            p-[6px] 
            from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
            "
            src={props.imageUrl}
            alt={`${props.realname}'s avatar`}
            onError={handleImageError}
          />
        )}

        {props.isOnline !== undefined && (
          <div
            className={`
            absolute top-0 right-0
            w-4 h-4
            rounded-full
            border-2 border-white
            ${
              props.isOnline ? "bg-green-500" : "bg-gray-400"
            }
            `}
            aria-label={props.isOnline ? "online" : "offline"}
          />
        )}
      </div>

      <div className="avatar__texts text-center justify-between">
        <div className="text__title">
          <h1>{props.nickname}</h1>
        </div>

        <div className="text__name mt-3">
          <h2>{props.realname}</h2>
        </div>

        <div className="text__follow">
          <button
            className={`
            w-80 mt-5 
            rounded-md 
            px-4 py-2 
            transition-all
            ${
              isFollowing
                ? "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }
            `}
            onClick={handleFollowClick}
            aria-pressed={isFollowing}
          >
            {isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;