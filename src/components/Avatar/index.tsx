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
        <img
          className='
            rounded-full
            w-80
            h-80
            object-cover
            p-[6px]
            bg-gradient-to-r
            from-[#6EE7B7]
            via-[#3B82F6]
            to-[#9333EA]
            hover:shadow-lg
            transition-all
            duration-300
          '
          src="./src/assets/photo.png"
          alt="User avatar"
        />
      </div>

      <div className='avatar__texts flex flex-col items-center gap-4'>

        <div className='text__title'>
          <h1 className='text-xl font-bold text-gray-900'>{props.nickname}</h1>
        </div>

        <div className='text__name'>
          <h2 className='text-sm text-gray-500'>{props.realname}</h2>
        </div>

        <div className='text__follow'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-lg transition-colors duration-200'>
            Follow
          </button>
        </div>

      </div>

    </div>
  );
}

export default Avatar;