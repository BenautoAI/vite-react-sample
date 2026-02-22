import defaultPhoto from '../../assets/photo.png';

interface AvatarProps {
  imageSrc?: string;
  nickname: string;
  realname: string;
  onFollowClick?: () => void;
}

function Avatar(props: AvatarProps) {
  const { imageSrc, nickname, realname, onFollowClick } = props;

  return (
    <div className='avatar__container flex flex-row items-center w-full'>
      {/* Gradient border wrapper using padding technique */}
      <div className='avatar__photo mr-6 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[4px]'>
        <img
          className='w-24 h-24 rounded-full object-cover bg-[#242424] transition-transform duration-300 ease-in-out hover:scale-110'
          src={imageSrc || defaultPhoto}
          alt={`${nickname}'s avatar`}
        />
      </div>

      <div className='avatar__texts flex flex-col justify-center'>
        <div className='text__title'>
          <h1 className='text-2xl font-semibold'>{nickname}</h1>
        </div>

        <div className='text__name mt-1'>
          <h2 className='text-lg font-normal text-gray-400'>{realname}</h2>
        </div>

        <div className='text__follow'>
          <button 
            className='w-24 mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-[#1a1a1a] border border-transparent hover:border-[#646cff] transition-all duration-250 cursor-pointer'
            onClick={onFollowClick}
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;