interface AvatarProps {
  nickname: string;
  realname: string;
  avatarUrl?: string;
  isFollowing?: boolean;
}

function Avatar(props: AvatarProps) {
  const { 
    nickname, 
    realname, 
    avatarUrl = "./src/assets/photo.png",
    isFollowing = false 
  } = props;

  return (
    <div className="
      avatar__container 
      flex 
      flex-row
      items-center
      w-full
      gap-6
      ">

      <div className="avatar__photo">
        <div className="
          rounded-full
          bg-gradient-to-r 
          p-[4px] 
          from-[#6EE7B7] 
          via-[#3B82F6] 
          to-[#9333EA]
          ">
          <img
            className="
              rounded-full
              w-24
              h-24
              object-cover
              bg-gray-800
              hover:scale-105
              transition-transform
              duration-300
              "
            src={avatarUrl}
            alt={realname}
          />
        </div>
      </div>

      <div className="avatar__texts flex flex-col items-start">

        <div className="text__title">
          <h1 className="
            text-2xl 
            font-bold 
            text-white
            ">
            {nickname}
          </h1>
        </div>

        <div className="text__name mt-2">
          <h2 className="
            text-lg 
            font-medium 
            text-gray-400
            ">
            {realname}
          </h2>
        </div>

        <div className="text__follow mt-4">
          <button className="
            px-8 
            py-2 
            rounded-lg
            font-semibold
            transition-all
            duration-200
            hover:scale-105
            ">
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>

      </div>

    </div>
  );
}

export default Avatar;