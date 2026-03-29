/**
 * AvatarProps - Properties for the Avatar component
 * @property {string} nickname - User's nickname/handle to display
 * @property {string} realname - User's real name to display
 */
interface AvatarProps {
  nickname: string;
  realname: string;
}

/**
 * Avatar component displays a user profile with circular avatar image,
 * user information (nickname and real name), and a Follow button.
 * Features a gradient border (cyan → blue → purple) around the avatar.
 *
 * @param props - Component props
 * @returns Rendered user profile avatar
 */
function Avatar(props: AvatarProps) {
  return (
    <div className="flex flex-row items-center gap-8" style={{ padding: '20px' }}>
      {/* Avatar image with gradient border */}
      <div className="relative flex-shrink-0">
        <div
          style={{
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6EE7B7 0%, #3B82F6 40%, #9333EA 100%)',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/src/assets/photo.png"
            alt="User avatar"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* User information section */}
      <div className="flex flex-col gap-3">
        {/* Nickname */}
        <div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>{props.nickname}</h1>
        </div>

        {/* Real name */}
        <div>
          <h2 style={{ fontSize: '0.875rem', color: '#6B7280', margin: 0 }}>{props.realname}</h2>
        </div>

        {/* Follow button */}
        <div>
          <button
            style={{
              padding: '8px 24px',
              backgroundColor: '#3B82F6',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;