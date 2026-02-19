interface AvatarProps {
  nickname: string;
  realname: string;
  avatarUrl?: string;
}

function Avatar(props: AvatarProps) {
  const { nickname, realname, avatarUrl } = props;
  const defaultAvatar = "/src/assets/photo.png";

  return (
    <div className="flex flex-row items-center w-full">
      <div className="mr-20">
        <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] rounded-full transition-transform duration-300 hover:scale-110">
          <img
            className="rounded-full w-24 h-24 object-cover bg-white"
            src={avatarUrl || defaultAvatar}
            alt={`${nickname} avatar`}
          />
        </div>
      </div>

      <div className="flex flex-col items-start">
        <div>
          <h1 className="text-2xl font-bold text-dark">{nickname}</h1>
        </div>

        <div className="mt-3">
          <h2 className="text-lg text-muted">{realname}</h2>
        </div>

        <div className="mt-5">
          <button className="bg-primary rounded-sm px-6 py-3 text-sm font-bold text-white hover:bg-secondary transition-colors">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;