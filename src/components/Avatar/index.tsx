interface AvatarProps {
  nickname: string,
  realname: string
}

function Avatar(props: AvatarProps) {
  return (
    <div className="
      avatar__container 
      flex 
      flex-row
      items-center
      w-full
      ">

      <div className="avatar__photo mr-20">
        <div className="
          bg-gradient-to-r
          from-[#06B6D4]
          via-[#3B82F6]
          to-[#A855F7]
          rounded-full
          p-[4px]
        ">
          <img
            className="
              rounded-full
              hover:scale-105
              transition-transform
              duration-200
              w-40
              h-40
              object-cover
            "
            src="./src/assets/photo.png"
            alt={props.nickname}
          />
        </div>
      </div>

      <div className="avatar__texts text-center justify-between">

        <div className="text__title">
          <h1>{props.nickname}</h1>
        </div>

        <div className="text__name mt-3">
          <h2>{props.realname}</h2>
        </div>

        <div className="text__follow">
          <button className="w-80 mt-5">
            Follow
          </button>
        </div>

      </div>

    </div>
  );
}

export default Avatar;