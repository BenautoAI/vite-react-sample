export interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  onFollowClick?: () => void;
  showFollowButton?: boolean;
}

/**
 * Avatar component displaying user profile information with a circular photo,
 * username, real name, and optional Follow button.
 *
 * @param props - Component props including nickname, realname, and optional callbacks
 * @returns React component
 */
export function Avatar({
  nickname,
  realname,
  imageUrl = "/src/assets/photo.png",
  onFollowClick,
  showFollowButton = true,
}: AvatarProps) {
  return (
    <div className="flex flex-row items-center gap-6 w-full">
      {/* Avatar Photo Container */}
      <div className="relative h-20 w-20 flex-shrink-0">
        <div className="rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1">
          <img
            src={imageUrl}
            alt={`${nickname} avatar`}
            className="h-full w-full rounded-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* User Info Section */}
      <div className="flex flex-col gap-3">
        {/* Nickname */}
        <div>
          <h1 className="text-lg font-bold text-primary">{nickname}</h1>
        </div>

        {/* Real Name */}
        <div>
          <h2 className="text-sm font-medium text-muted">{realname}</h2>
        </div>

        {/* Follow Button */}
        {showFollowButton && (
          <button
            onClick={onFollowClick}
            style={{
              backgroundColor: '#3B82F6',
              borderColor: '#3B82F6',
              color: 'white',
              padding: '8px 24px',
              fontSize: '14px',
              fontWeight: 'bold',
              border: '2px solid #3B82F6',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            aria-label={`Follow ${nickname}`}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
}
