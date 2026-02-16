interface AvatarProps {
  nickname: string;
  realname: string;
  imageSrc?: string;
  size?: "small" | "medium" | "large";
  showBorder?: boolean;
}

function Avatar({
  nickname,
  realname,
  imageSrc = "./src/assets/photo.png",
  size = "medium",
  showBorder = true,
}: AvatarProps) {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  return (
    <div className="avatar__container flex flex-row items-center w-full">
      <div className="avatar__photo mr-20">
        <div
          className={`${sizeClasses[size]} rounded-full ${showBorder ? "bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px]" : ""} transition-transform hover:scale-110`}
        >
          <img
            className="w-full h-full rounded-full object-cover"
            src={imageSrc}
            alt={`${nickname} avatar`}
          />
        </div>
      </div>

      <div className="avatar__texts flex flex-col">
        <div className="text__title">
          <h1 className="text-xl font-bold">{nickname}</h1>
        </div>

        <div className="text__name mt-3">
          <h2 className="text-lg text-muted">{realname}</h2>
        </div>

        <div className="text__follow">
          <button className="bg-primary text-white px-6 py-2 rounded-sm mt-5 font-bold hover:opacity-90 transition-opacity">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;