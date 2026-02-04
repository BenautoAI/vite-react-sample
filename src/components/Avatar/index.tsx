import { useState } from 'react';

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
}

function Avatar(props: AvatarProps) {
  const { nickname, realname, imageUrl } = props;
  const [imageError, setImageError] = useState(false);

  // Generate initials from realname (first letter of first word + first letter of last word)
  const getInitials = (name: string): string => {
    if (!name || name.trim() === '') return '?';
    const words = name.trim().split(' ');
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="avatar__container flex flex-row items-center w-full">
      <div className="avatar__photo mr-4">
        {/* Gradient border container */}
        <div className="rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] w-fit">
          {imageUrl && !imageError ? (
            <img
              className="rounded-full w-20 h-20 object-cover bg-white transition-transform duration-300 ease-in-out hover:scale-110"
              src={imageUrl}
              alt={`${realname}'s profile picture`}
              onError={handleImageError}
            />
          ) : (
            <div className="rounded-full w-20 h-20 bg-white flex items-center justify-center text-2xl font-bold text-gray-700 transition-transform duration-300 ease-in-out hover:scale-110">
              {getInitials(realname)}
            </div>
          )}
        </div>
      </div>

      <div className="avatar__texts flex flex-col justify-center">
        <div className="text__title">
          <h1 className="text-lg font-bold text-gray-900">{nickname}</h1>
        </div>

        <div className="text__name mt-1">
          <h2 className="text-sm text-gray-600">{realname}</h2>
        </div>

        <div className="text__follow">
          <button
            className="mt-3 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            aria-label={`Follow ${nickname}`}
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
