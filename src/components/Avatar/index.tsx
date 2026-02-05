import defaultPhoto from '../../assets/photo.png';

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  onFollowClick?: () => void;
}

function Avatar(props: AvatarProps) {
  const { nickname, realname, imageUrl, onFollowClick } = props;
  const photoSrc = imageUrl || defaultPhoto;

  return (
    <div className="
      avatar__container 
      flex 
      flex-row
      items-center
      w-full
    ">

      <div className="avatar__photo mr-4">
        <img
          className="
            rounded-full
            transition-transform
            duration-300
            ease-in-out
            hover:scale-110
            bg-gradient-to-r 
            p-[6px] 
            from-[#6EE7B7] 
            via-[#3B82F6] 
            to-[#9333EA]
            border-4
            border-red-500
          "
          src={photoSrc}
          alt={`${nickname} profile photo`}
        />
      </div>

      <div className="avatar__texts text-center justify-between">

        <div className="text__title">
          <h1 className="font-bold text-lg">{nickname}</h1>
        </div>

        <div className="text__name mt-2">
          <h2 className="text-gray-600 text-sm">{realname}</h2>
        </div>

        <div className="text__follow">
          <button 
            className="
              px-8 
              py-2 
              mt-4 
              bg-blue-500 
              hover:bg-blue-600 
              text-white 
              rounded-full 
              transition-colors 
              duration-200
              font-medium
            "
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