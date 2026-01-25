interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  size?: 'small' | 'medium' | 'large';
  showFollow?: boolean;
}

function Avatar(props: AvatarProps) {
  const { 
    nickname, 
    realname, 
    imageUrl = './src/assets/photo.png',
    size = 'medium',
    showFollow = true
  } = props;

  // Size variants for the avatar container
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const avatarSize = sizeClasses[size];

  return (
    <div className="avatar__container flex flex-row items-center w-full">
      {/* Avatar photo with gradient border ring */}
      <div className="avatar__photo mr-20">
        <div className={`
          rounded-full 
          bg-gradient-to-r 
          from-[#6EE7B7] 
          via-[#3B82F6] 
          to-[#9333EA] 
          p-[4px]
          ${avatarSize}
          hover:scale-110
          transition-transform
          duration-300
          ease-in-out
          outline
          outline-4
          outline-red-500
        `}>
          <img
            className="rounded-full w-full h-full object-cover"
            src={imageUrl}
            alt={`${nickname}'s avatar`}
          />
        </div>
      </div>

      {/* User info section */}
      <div className="avatar__texts text-center justify-between">
        <div className="text__title">
          <h1 className="text-2xl font-bold">{nickname}</h1>
        </div>

        <div className="text__name mt-3">
          <h2 className="text-lg text-gray-600">{realname}</h2>
        </div>

        {showFollow && (
          <div className="text__follow">
            <button className="w-80 mt-5 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Follow
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Avatar;
