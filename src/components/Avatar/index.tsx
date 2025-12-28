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
        <div className='avatar__hat absolute top-[-30px] left-[50%] translate-x-[-50%] z-10'>
          <div className='
            w-[60px] h-[60px]
            bg-gradient-to-br from-[#FF6B6B] via-[#FFE66D] to-[#4ECDC4]
            rounded-t-full
            border-b-[8px] border-[#2C3E50]
            shadow-lg
            hover:rotate-12
            transition-transform
            duration-300
          '>
            <div className='
              absolute bottom-[-8px] left-[50%] translate-x-[-50%]
              w-[80px] h-[8px]
              bg-[#2C3E50]
              rounded-full
            '></div>
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
        <div className='avatar__nose absolute bottom-[25%] left-[50%] translate-x-[-50%] z-20'>
          <div className='
            w-[20px] h-[18px]
            bg-[#FFB6C1]
            rounded-full
            shadow-md
            hover:scale-110
            transition-transform
            duration-200
          '>
            <div className='
              absolute top-[30%] left-[25%]
              w-[4px] h-[4px]
              bg-[#FF69B4]
              rounded-full
              opacity-60
            '></div>
            <div className='
              absolute top-[30%] right-[25%]
              w-[4px] h-[4px]
              bg-[#FF69B4]
              rounded-full
              opacity-60
            '></div>
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