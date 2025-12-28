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

      <div className='avatar__photo mr-20 relative'>
        <div className='avatar__hat absolute -top-8 left-1/2 transform -translate-x-1/2 z-10'>
          <div className='hat__top w-16 h-8 bg-gradient-to-b from-[#8B4513] to-[#A0522D] rounded-t-full'></div>
          <div className='hat__brim w-20 h-2 bg-gradient-to-b from-[#654321] to-[#8B4513] rounded-full -mt-1'></div>
        </div>
        <img
          className='
          rounded-full
          hover:scale-x-110
          hover:scale-y-110
          animation-delay: 999s;
          hover:animate-
          bg-gradient-to-r 
          p-[6px] 
          from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          '
          src="./src/assets/photo.png"
        />
        <div className='avatar__nose absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
          <div className='w-6 h-5 bg-pink-400 rounded-full shadow-md'></div>
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