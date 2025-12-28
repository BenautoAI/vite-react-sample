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
        <div className='avatar__hat absolute -top-[30px] left-1/2 -translate-x-1/2 w-[60px] h-[40px]'>
          <div className='hat__top absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[20px] bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-t-full'></div>
          <div className='hat__brim absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[8px] bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-full'></div>
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
        <div className='avatar__nose absolute bottom-[25%] left-1/2 -translate-x-1/2 w-[20px] h-[16px] bg-gradient-to-b from-[#FFC0CB] to-[#FF69B4] rounded-full shadow-md'>
          <div className='nose__highlight absolute top-[3px] left-[5px] w-[6px] h-[4px] bg-white/40 rounded-full'></div>
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