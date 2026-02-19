import React from "react";

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Extract initials from realname (first + last name)
 * Example: "Felipe Aguiar" → "FA"
 */
function getInitials(realname: string): string {
  const parts = realname.trim().split(/\s+/);
  if (parts.length === 0 || !parts[0]) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Size configuration mapping for avatar dimensions and styling
 */
const SIZE_CONFIG = {
  sm: {
    container: "w-10 h-10",
    text: "text-sm",
  },
  md: {
    container: "w-16 h-16",
    text: "text-lg",
  },
  lg: {
    container: "w-24 h-24",
    text: "text-2xl",
  },
  xl: {
    container: "w-32 h-32",
    text: "text-4xl",
  },
};

function Avatar(props: AvatarProps) {
  const { nickname, realname, imageUrl, size = "md" } = props;
  const [imageError, setImageError] = React.useState(false);

  const sizeConfig = SIZE_CONFIG[size];
  const initials = getInitials(realname);
  const showInitials = !imageUrl || imageError;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="avatar__container flex flex-row items-center w-full">
      <div className="avatar__photo mr-20">
        {showInitials ? (
          <div
            className={`
              rounded-full
              bg-gradient-to-r
              from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
              p-[6px]
              hover:scale-110
              transition-transform
              ${sizeConfig.container}
            `}
            aria-label={`${realname} avatar`}
          >
            <div
              className={`
                w-full h-full
                rounded-full
                bg-gray-100
                flex items-center justify-center
                ${sizeConfig.text}
                font-semibold
                text-gray-700
              `}
            >
              {initials}
            </div>
          </div>
        ) : (
          <div
            className={`
              rounded-full
              bg-gradient-to-r
              from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
              p-[6px]
              hover:scale-110
              transition-transform
              ${sizeConfig.container}
            `}
          >
            <img
              className="w-full h-full rounded-full object-cover"
              src={imageUrl}
              alt={`${realname} profile picture`}
              onError={handleImageError}
            />
          </div>
        )}
      </div>

      <div className="avatar__texts text-center justify-between">
        <div className="text__title">
          <h1>{nickname}</h1>
        </div>

        <div className="text__name mt-3">
          <h2>{realname}</h2>
        </div>

        <div className="text__follow">
          <button className="w-80 mt-5">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;