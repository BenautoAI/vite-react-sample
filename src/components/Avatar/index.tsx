export interface AvatarProps {
  nickname: string;
  realname: string;
}

function Avatar({ nickname, realname }: AvatarProps) {
  return (
    <div className="avatar__container flex flex-row items-center w-full">
      <div className="avatar__photo mr-20">
        <img
          alt={`${nickname}'s avatar`}
          className="rounded-full border-2 border-red-500 hover:scale-x-110 hover:scale-y-110 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          src="./src/assets/photo.png"
        />
      </div>

      <div className="avatar__texts text-center justify-between">
        <div className="text__title">
          <h1>{nickname}</h1>
        </div>

        <div className="text__name mt-3">
          <h2>{realname}</h2>
        </div>

        <div className="text__follow">
          <button className="w-80 mt-5">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
