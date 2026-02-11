interface AvatarProps {
  nickname: string,
  realname: string
}

function Avatar(props: AvatarProps) {
  return (
    <div className='
      avatar__container 
      flex 
      flex-row
      items-center
      w-full
      '>

      <div className='avatar__photo mr-20'>
        <div className='
          rounded-full
          bg-gradient-to-r 
          from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
          p-[6px]
          transition-transform
          duration-300
          hover:scale-110
        '>
          <img
            className='rounded-full w-full h-full object-cover'
            src="./src/assets/photo.png"
            alt="User avatar"
          />
        </div>
      </div>

      <div className='avatar__texts text-center justify-between'>

        <div className='text__title'>
          <h1>{props.nickname}</h1>
        </div>

        <div className='text__name mt-3'>
          <h2>{props.realname}</h2>
        </div>

        <div className='text__follow'>
          <button className='w-80 mt-5'>
            Follow
          </button>
        </div>

      </div>

    </div>
  );
}

export default Avatar;