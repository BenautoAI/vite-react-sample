interface AvatarProps {
  nickname: string;
  realname: string;
}

function Avatar(props: AvatarProps) {
  return (
    <div className="flex flex-row items-center w-full gap-8">
      <div className="flex-shrink-0">
        <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] rounded-full">
          <img
            className="rounded-full hover:scale-110 transition-transform duration-300"
            src="/src/assets/photo.png"
            alt="Avatar"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center text-center">
        <div>
          <h1 className="text-lg font-bold">{props.nickname}</h1>
        </div>

        <div className="mt-3">
          <h2 className="text-base">{props.realname}</h2>
        </div>

        <div className="mt-5">
          <button
            style={{ backgroundColor: '#3B82F6', color: '#ffffff', border: 'none' }}
            className="px-6 py-2 rounded text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
