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
        <div className='avatar__hat absolute top-[-30px] left-[50%] translate-x-[-50%] text-5xl z-10'>
          🎩
        </div>
        <div className='avatar__nose absolute bottom-[35%] left-[50%] translate-x-[-50%] text-3xl z-10'>
          <span style={{ filter: 'hue-rotate(320deg) saturate(200%)' }}>👃</span>
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