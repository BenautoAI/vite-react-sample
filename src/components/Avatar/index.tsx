interface AvatarProps {
  nickname: string,
  realname: string
}

function Avatar(props: AvatarProps) {
  return (
    <div className="flex flex-row items-center w-full">
      <div className="mr-20">
        <img
          className="rounded-full hover:scale-110 transition-transform duration-300 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] ring-4 ring-red-500"
          src="./src/assets/photo.png"
          alt="User avatar"
        />
      </div>

      <div className="text-center justify-between">
        <div>
          <h1>{props.nickname}</h1>
        </div>

        <div className="mt-3">
          <h2>{props.realname}</h2>
        </div>

        <div className="mt-5">
          <button className="w-80">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;