import avatarImage from '../../assets/photo.png'

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
      gap-5
      '>

      <div className='avatar__photo flex-shrink-0'>
        <div className='
          flex
          items-center
          justify-center
          w-48
          h-48
          rounded-full
          bg-gradient-to-r
          from-[#6EE7B7]
          via-[#3B82F6]
          to-[#9333EA]
          p-1
          '>
          <img
            className='
            rounded-full
            w-full
            h-full
            object-cover
            hover:scale-105
            transition-transform
            duration-300
            '
            src={avatarImage}
            alt="User avatar"
          />
        </div>
      </div>

      <div className='avatar__texts flex flex-col gap-3'>

        <div className='text__title'>
          <h1 className='text-lg font-medium'>{props.nickname}</h1>
        </div>

        <div className='text__name'>
          <h2 className='text-sm font-medium'>{props.realname}</h2>
        </div>

        <div className='text__follow'>
          <button className='
            px-6
            py-2
            bg-blue-600
            text-white
            rounded-lg
            hover:bg-blue-700
            transition-colors
            duration-200
            '>
            Follow
          </button>
        </div>

      </div>

    </div>
  );
}

export default Avatar;