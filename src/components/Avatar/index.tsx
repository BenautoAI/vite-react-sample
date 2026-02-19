interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  altText?: string;
}

/**
 * Avatar component displaying user profile with gradient border.
 * Shows a circular avatar image with vibrant gradient border ring,
 * username, real name, and a follow button.
 *
 * @param props - Avatar properties
 * @param props.nickname - User's username/handle
 * @param props.realname - User's full name
 * @param props.imageUrl - Optional URL to user's profile image
 * @param props.altText - Optional alt text for image accessibility
 */
function Avatar(props: AvatarProps) {
  const { nickname, realname, imageUrl, altText } = props;
  
  // Default to assets photo if no imageUrl provided
  const avatarSrc = imageUrl || "/src/assets/photo.png";
  const avatarAlt = altText || `${nickname} avatar`;

  return (
    <div className="flex w-full flex-row items-center">
      {/* Gradient border container */}
      <div className="mr-20 h-40 w-40 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] transition-transform duration-300 ease-in-out hover:scale-110">
        {/* Inner image with full circular shape */}
        <img
          className="h-full w-full rounded-full object-cover"
          src={avatarSrc}
          alt={avatarAlt}
        />
      </div>

      <div className="flex flex-col items-start">
        <div className="text__title">
          <h1 className="text-2xl font-bold">{nickname}</h1>
        </div>

        <div className="text__name mt-3">
          <h2 className="text-lg text-muted">{realname}</h2>
        </div>

        <div className="text__follow">
          <button className="mt-5 rounded-sm bg-primary px-6 py-3 text-sm font-bold text-white">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;