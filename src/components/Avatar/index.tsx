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
          className='rounded-full hover:scale-x-110 hover:scale-y-110 bg-gradient-to-r p-[6px] from-accent-teal via-primary-500 to-accent-purple'
          src="./src/assets/photo.png"
        />
      </div>

      <div className='avatar__texts text-center justify-between'>

        <div className='text__title'>
          <h1 className='heading-1'>{props.nickname}</h1>
        </div>

        <div className='text__name mt-3'>
          <h2 className='heading-2'>{props.realname}</h2>
        </div>

        <div className='text__follow'>
          <button className='w-80 mt-5 bg-primary-500 text-white font-medium rounded-lg px-4 py-2 hover:bg-primary-600 transition-colors'>
            Follow
          </button>
        </div>

      </div>

    </div>
  );
}

export default Avatar;