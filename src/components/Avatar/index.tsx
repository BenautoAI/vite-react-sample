interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
}

function Avatar(props: AvatarProps) {
  const imageUrl = props.imageUrl || './src/assets/photo.png';

  return (
    <div className='
      avatar__container 
      flex 
      flex-row
      items-center
      justify-center
      w-full
      gap-8
      py-8
    '>
      {/* Avatar Photo Container with Gradient Border */}
      <div className='
        avatar__photo
        flex
        items-center
        justify-center
        relative
        w-48
        h-48
        rounded-full
        bg-gradient-to-r
        from-[#6EE7B7]
        via-[#3B82F6]
        to-[#9333EA]
        p-1
        transition-transform
        duration-300
        hover:scale-110
        flex-shrink-0
        shadow-lg
      '>
        <img
          className='
            rounded-full
            w-full
            h-full
            object-cover
            border-4
            border-red-600
          '
          src={imageUrl}
          alt={props.nickname}
        />
      </div>

      {/* Avatar Text Content */}
      <div className='
        avatar__texts
        flex
        flex-col
        items-start
        justify-center
        flex-grow
        gap-4
      '>
        <div className='text__title'>
          <h1 className='
            text-4xl 
            font-bold 
            text-white
            leading-tight
          '>{props.nickname}</h1>
        </div>

        <div className='text__name'>
          <h2 className='
            text-xl 
            text-gray-300
            font-medium
          '>{props.realname}</h2>
        </div>

        <div className='text__follow'>
          <button className='
            px-8
            py-3
            bg-gradient-to-r
            from-[#6EE7B7]
            to-[#3B82F6]
            text-gray-900
            font-bold
            rounded-lg
            transition-all
            duration-300
            hover:shadow-xl
            hover:shadow-blue-500/50
            active:scale-95
          '>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
