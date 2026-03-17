interface AvatarProps {
  nickname: string;
  realname: string;
}

function Avatar(props: AvatarProps) {
  return (
    <div className='avatar__container flex flex-row items-center w-full justify-center'>
      <div className='avatar__photo'>
        <div className='rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px]'>
          <img
            className='rounded-full w-64 h-64 object-cover hover:scale-105 transition-transform duration-300'
            src="./src/assets/photo.png"
            alt={props.nickname}
          />
        </div>
      </div>

      <div className='avatar__texts flex flex-col items-center justify-center ml-12'>
        <div className='text__title'>
          <h1 className='text-2xl font-bold'>{props.nickname}</h1>
        </div>

        <div className='text__name mt-3'>
          <h2 className='text-lg'>{props.realname}</h2>
        </div>

        <div className='text__follow mt-5'>
          <button className='px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;