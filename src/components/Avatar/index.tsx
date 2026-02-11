interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl: string;
  alt?: string;
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
          w-40
          h-40
          rounded-full
          bg-gradient-to-r
          from-[#6EE7B7]
          via-[#3B82F6]
          to-[#9333EA]
          p-[6px]
          hover:scale-110
          transition-transform
          duration-300
          ease-in-out
        '>
          <img
            className='w-full h-full rounded-full object-cover'
            src={props.imageUrl}
            alt={props.alt || props.nickname}
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