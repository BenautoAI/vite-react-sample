/**
 * AvatarProps - Properties for the Avatar component
 * @property {string} nickname - User's nickname/handle to display
 * @property {string} realname - User's real name to display
 * @property {boolean} [isLoading=false] - Whether the follow action is in progress
 * @property {boolean} [isDisabled=false] - Whether the button is disabled
 */
interface AvatarProps {
  nickname: string;
  realname: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

// Styling constants
const AVATAR_CONTAINER_STYLE: React.CSSProperties = {
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "32px",
};

const AVATAR_WRAPPER_STYLE: React.CSSProperties = {
  width: "220px",
  height: "220px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #6EE7B7 0%, #3B82F6 40%, #9333EA 100%)",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "4px solid #EF4444",
  flexShrink: 0,
};

const AVATAR_IMAGE_STYLE: React.CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
};

const USER_INFO_CONTAINER_STYLE: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const NICKNAME_STYLE: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "#111827",
  margin: 0,
};

const REALNAME_STYLE: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "#6B7280",
  margin: 0,
};

const getButtonStyle = (
  isLoading: boolean,
  isDisabled: boolean,
): React.CSSProperties => ({
  padding: "8px 24px",
  backgroundColor: isDisabled ? "#D1D5DB" : "#3B82F6",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  fontWeight: 500,
  cursor: isDisabled || isLoading ? "not-allowed" : "pointer",
  opacity: isDisabled ? 0.6 : 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  minWidth: "80px",
});

const SPINNER_STYLE: React.CSSProperties = {
  width: "16px",
  height: "16px",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  borderTop: "2px solid #ffffff",
  borderRadius: "50%",
  animation: "spin 0.8s linear infinite",
};

const SPINNER_ANIMATION = `
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

/**
 * Avatar component displays a user profile with circular avatar image,
 * user information (nickname and real name), and a Follow button.
 * Features a gradient border (cyan → blue → purple) around the avatar.
 * Supports loading and disabled states for the Follow button.
 *
 * @param props - Component props
 * @returns Rendered user profile avatar
 */
function Avatar(props: AvatarProps) {
  const isLoading = props.isLoading ?? false;
  const isDisabled = props.isDisabled ?? false;
  return (
    <div style={AVATAR_CONTAINER_STYLE}>
      {/* Avatar image with gradient border and red outline */}
      <div style={AVATAR_WRAPPER_STYLE}>
        <img
          src="/src/assets/photo.png"
          alt="User avatar"
          style={AVATAR_IMAGE_STYLE}
        />
      </div>

      {/* User information section */}
      <div style={USER_INFO_CONTAINER_STYLE}>
        {/* Nickname */}
        <h1 style={NICKNAME_STYLE}>{props.nickname}</h1>

        {/* Real name */}
        <h2 style={REALNAME_STYLE}>{props.realname}</h2>

        {/* Follow button */}
        <button
          disabled={isLoading || isDisabled}
          style={getButtonStyle(isLoading, isDisabled)}
        >
          {isLoading ? (
            <>
              <div style={SPINNER_STYLE} />
              <span>Loading</span>
            </>
          ) : (
            "Follow"
          )}
        </button>
        {/* CSS for spinner animation */}
        <style>{SPINNER_ANIMATION}</style>
      </div>
    </div>
  );
}

export default Avatar;
