interface AvatarProps {
  nickname: string;
  realname: string;
}

// Button styling constants to ensure consistent styling across the component
const BUTTON_STYLES = {
  backgroundColor: "#3B82F6",
  color: "#ffffff",
  border: "none",
} as const;

function Avatar(props: AvatarProps) {
  return (
    <div className="flex flex-row items-center w-full gap-8">
      {/* Avatar image with gradient border and hover effect */}
      <div className="flex-shrink-0">
        <div className="rounded-full border-4 border-red-500 p-[3px]">
          <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] rounded-full">
            <img
              className="rounded-full hover:scale-110 transition-transform duration-300"
              src="/src/assets/photo.png"
              alt={`Avatar of ${props.nickname}`}
            />
          </div>
        </div>
      </div>

      {/* User information section */}
      <div className="flex flex-col justify-center text-center">
        {/* Nickname displayed as main heading */}
        <div>
          <h1 className="text-lg font-bold">{props.nickname}</h1>
        </div>

        {/* Real name displayed as secondary heading */}
        <div className="mt-3">
          <h2 className="text-base">{props.realname}</h2>
        </div>

        {/* Follow button with consistent styling */}
        <div className="mt-5">
          <button
            style={BUTTON_STYLES}
            className="px-6 py-2 rounded text-sm font-bold hover:opacity-90 transition-opacity"
            aria-label={`Follow ${props.nickname}`}
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
