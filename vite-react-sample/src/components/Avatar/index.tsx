import { useState } from "react";

/**
 * Props for the Avatar component
 */
interface AvatarProps {
  /** User's display nickname (e.g., "@username") */
  nickname: string;
  /** User's real name */
  realname: string;
  /** Optional URL for profile image (supports external URLs or public folder paths) */
  imageUrl?: string;
  /** Size variant for the avatar */
  size?: "small" | "medium" | "large";
  /** Callback when follow button is clicked */
  onFollowClick?: () => void;
  /** Whether the user is currently being followed */
  isFollowing?: boolean;
  /** Whether to show the follow button */
  showFollowButton?: boolean;
  /** Additional CSS classes for customization */
  className?: string;
}

/**
 * Smart Avatar Component
 * 
 * Displays user profile information with photo, nickname, real name, and optional follow functionality.
 * Features:
 * - Responsive image loading with fallback to initials
 * - Gradient border effect on profile photo
 * - Multiple size variants (small, medium, large)
 * - Smooth hover animations
 * - Full accessibility support
 * - Customizable styling
 * 
 * @example
 * ```tsx
 * <Avatar
 *   nickname="@johndoe"
 *   realname="John Doe"
 *   imageUrl="/images/profile.jpg"
 *   size="medium"
 *   onFollowClick={() => console.log('Follow clicked')}
 *   showFollowButton={true}
 * />
 * ```
 */
function Avatar({
  nickname,
  realname,
  imageUrl,
  size = "medium",
  onFollowClick,
  isFollowing = false,
  showFollowButton = true,
  className = "",
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  /**
   * Get initials from nickname or realname for fallback display
   */
  const getInitials = (): string => {
    if (nickname && nickname.length > 0) {
      // Remove @ symbol if present and take first character
      const cleanNickname = nickname.replace("@", "");
      return cleanNickname.charAt(0).toUpperCase();
    }
    if (realname && realname.length > 0) {
      return realname.charAt(0).toUpperCase();
    }
    return "?";
  };

  /**
   * Get size classes for avatar image/fallback
   */
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return {
          container: "w-12 h-12",
          text: "text-lg",
          spacing: "mr-3",
        };
      case "large":
        return {
          container: "w-24 h-24",
          text: "text-4xl",
          spacing: "mr-6",
        };
      case "medium":
      default:
        return {
          container: "w-16 h-16",
          text: "text-2xl",
          spacing: "mr-5",
        };
    }
  };

  /**
   * Get text size classes based on avatar size
   */
  const getTextSizeClasses = () => {
    switch (size) {
      case "small":
        return {
          nickname: "text-sm font-semibold",
          realname: "text-xs text-gray-600",
          button: "text-xs px-3 py-1 mt-2",
        };
      case "large":
        return {
          nickname: "text-xl font-bold",
          realname: "text-base text-gray-600",
          button: "text-base px-6 py-2 mt-4",
        };
      case "medium":
      default:
        return {
          nickname: "text-base font-semibold",
          realname: "text-sm text-gray-600",
          button: "text-sm px-4 py-1.5 mt-3",
        };
    }
  };

  const sizeClasses = getSizeClasses();
  const textClasses = getTextSizeClasses();

  /**
   * Handle image load error by showing fallback
   */
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={`avatar__container flex flex-row items-center w-full ${className}`}
    >
      {/* Avatar Photo with Gradient Border */}
      <div className={`avatar__photo ${sizeClasses.spacing}`}>
        {/* Gradient border wrapper */}
        <div
          className={`${sizeClasses.container} rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[3px] transition-transform duration-300 hover:scale-110`}
        >
          {/* Inner white border and image/fallback container */}
          <div
            className={`${sizeClasses.container} rounded-full bg-white p-[2px] flex items-center justify-center overflow-hidden`}
          >
            {!imageError && imageUrl ? (
              <img
                src={imageUrl}
                alt={`${realname}'s profile picture`}
                className="w-full h-full object-cover rounded-full"
                onError={handleImageError}
              />
            ) : (
              // Fallback: Show initials with gradient background
              <div
                className={`w-full h-full rounded-full bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] flex items-center justify-center ${sizeClasses.text} font-bold text-white`}
              >
                {getInitials()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Avatar Text Content */}
      <div className="avatar__texts flex flex-col justify-center">
        {/* Nickname */}
        <div className="text__title">
          <h1 className={textClasses.nickname}>{nickname}</h1>
        </div>

        {/* Real Name */}
        <div className="text__name">
          <h2 className={textClasses.realname}>{realname}</h2>
        </div>

        {/* Follow Button */}
        {showFollowButton && (
          <div className="text__follow">
            <button
              onClick={onFollowClick}
              aria-label={
                isFollowing ? `Unfollow ${realname}` : `Follow ${realname}`
              }
              className={`${textClasses.button} rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-700`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Avatar;
