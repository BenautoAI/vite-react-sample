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
        {/* Hat decoration */}
        <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 z-10'>
          <div className='relative w-16 h-16'>
            {/* Hat brim */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-full shadow-lg'></div>
            {/* Hat top */}
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-10 bg-gradient-to-b from-red-500 to-red-600 rounded-t-full shadow-md'></div>
            {/* Hat decoration band */}
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-yellow-400 shadow-sm'></div>
          </div>
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
        {/* Pink nose decoration */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10'>
          <div className='w-6 h-5 bg-pink-400 rounded-full shadow-md'>
            {/* Nose highlights for 3D effect */}
            <div className='absolute top-1 left-1 w-2 h-2 bg-pink-300 rounded-full opacity-60'></div>
          </div>
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