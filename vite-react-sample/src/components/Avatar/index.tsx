import { useState } from "react";

interface AvatarProps {
  realname: string;
  nickname?: string;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
  showFollowButton?: boolean;
  onFollowClick?: () => void;
  onClick?: () => void;
  status?: "online" | "offline";
  className?: string;
}

const SIZE_CONFIG = {
  sm: {
    container: "w-8 h-8",
    text: "text-xs",
    status: "w-2 h-2",
    fontSize: "text-xs",
  },
  md: {
    container: "w-16 h-16",
    text: "text-sm",
    status: "w-3 h-3",
    fontSize: "text-base",
  },
  lg: {
    container: "w-24 h-24",
    text: "text-lg",
    status: "w-4 h-4",
    fontSize: "text-xl",
  },
};

function Avatar(props: AvatarProps) {
  const {
    realname,
    nickname,
    imageUrl,
    size = "md",
    showFollowButton = false,
    onFollowClick,
    onClick,
    status,
    className = "",
  } = props;

  const [imageError, setImageError] = useState(false);

  // Generate initials from realname
  const getInitials = (name: string): string => {
    const words = name.trim().split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
  };

  const sizeConfig = SIZE_CONFIG[size];
  const shouldShowImage = imageUrl && !imageError;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={`avatar__container flex flex-row items-center w-full ${className}`}
    >
      <div className="avatar__photo mr-5 relative">
        <div
          className={`relative ${sizeConfig.container} ${onClick ? "cursor-pointer" : ""}`}
          onClick={onClick}
          onKeyDown={(e) => {
            if (onClick && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onClick();
            }
          }}
          role={onClick ? "button" : undefined}
          tabIndex={onClick ? 0 : undefined}
          aria-label={onClick ? `View ${realname}'s profile` : undefined}
        >
          {shouldShowImage ? (
            <img
              className={`${sizeConfig.container} rounded-full object-cover transition-all duration-300 hover:scale-110 p-[3px] bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]`}
              src={imageUrl}
              alt={`${realname}'s avatar`}
              onError={handleImageError}
            />
          ) : (
            <div
              className={`${sizeConfig.container} rounded-full flex items-center justify-center font-semibold text-white transition-all duration-300 hover:scale-110 p-[3px] bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]`}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className={sizeConfig.fontSize}>{getInitials(realname)}</span>
              </div>
            </div>
          )}

          {status && (
            <div
              className={`absolute bottom-0 right-0 ${sizeConfig.status} rounded-full border-2 border-white ${
                status === "online" ? "bg-green-500" : "bg-gray-400"
              }`}
              aria-label={status === "online" ? "Online" : "Offline"}
            />
          )}
        </div>
      </div>

      <div className="avatar__texts flex flex-col justify-center">
        {nickname && (
          <div className="text__title">
            <h1 className={`font-bold ${sizeConfig.text}`}>{nickname}</h1>
          </div>
        )}

        <div className={`text__name ${nickname ? "mt-1" : ""}`}>
          <h2 className={`text-gray-600 ${sizeConfig.text}`}>{realname}</h2>
        </div>

        {showFollowButton && (
          <div className="text__follow mt-3">
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={onFollowClick}
              aria-label={`Follow ${realname}`}
            >
              Follow
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Avatar;
