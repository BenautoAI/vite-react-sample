interface AvatarProps {
  nickname: string;
  realname: string;
}

function Avatar(props: AvatarProps) {
  return (
    <div className='avatar__container flex flex-row items-center w-full gap-8'>
      
      <div className='avatar__photo-wrapper relative flex-shrink-0'>
        {/* Gradient border wrapper */}
        <div className='p-[6px] bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full'>
          {/* Image container */}
          <img
            className='w-32 h-32 rounded-full object-cover hover:scale-110 transition-transform duration-300'
            src='./src/assets/photo.png'
            alt={props.nickname}
          />
        </div>
      </div>

      <div className='avatar__texts flex flex-col justify-center'>
        
        <div className='text__title'>
          <h1 className='text-2xl font-bold'>{props.nickname}</h1>
        </div>

        <div className='text__name mt-2'>
          <h2 className='text-lg text-gray-600'>{props.realname}</h2>
        </div>

        <div className='text__follow mt-5'>
          <button className='px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'>
            Follow
          </button>
        </div>

      </div>

    </div>
  );
}

export default Avatar;