interface AvatarProps {
  /** User's nickname or display name */
  nickname: string;
  /** User's real full name */
  realname: string;
  /** Image URL for the avatar photo (optional) */
  photoSrc?: string;
}

/**
 * Avatar component displays user profile information with a circular photo,
 * nickname, real name, and a follow button.
 *
 * @param props - Avatar component props
 * @returns Avatar UI component
 */
function Avatar({
  nickname,
  realname,
  photoSrc = "/src/assets/photo.png",
}: AvatarProps) {
  return (
    <div className="flex w-full flex-row items-center gap-8">
      {/* Avatar photo with gradient border */}
      <div className="group flex-shrink-0">
        <div className="relative h-32 w-32 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[3px]">
          <img
            src={photoSrc}
            alt={realname || "User avatar"}
            className="h-full w-full rounded-full object-cover transition-transform duration-200 group-hover:scale-110"
          />
        </div>
      </div>

      {/* User info section */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-lg font-semibold text-dark">{nickname}</h1>
        <h2 className="text-sm text-muted">{realname}</h2>

        {/* Follow button */}
        <button 
          style={{
            marginTop: '0.5rem',
            width: '100%',
            borderRadius: '0.125rem',
            backgroundColor: '#3B82F6',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Follow
        </button>
      </div>
    </div>
  );
}

export default Avatar;
