import defaultPhoto from '../../assets/photo.png';

interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  onFollow?: () => void;
}

function Avatar(props: AvatarProps) {
  const { nickname, realname, imageUrl, onFollow } = props;

  return (
    <div className="avatar__container flex flex-row items-center w-full">
      <div className="avatar__photo mr-6">
        <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[3px] rounded-full">
          <img
            className="rounded-full w-16 h-16 object-cover transition-transform duration-300 hover:scale-110"
            src={imageUrl || defaultPhoto}
            alt={`${nickname}'s profile`}
          />
        </div>
      </div>

      <div className="avatar__texts flex flex-col">
        <div className="text__title">
          <h1 className="text-lg font-semibold">{nickname}</h1>
        </div>

        <div className="text__name mt-1">
          <h2 className="text-sm text-gray-600">{realname}</h2>
        </div>

        <div className="text__follow mt-3">
          <button
            className="px-6 py-2 bg-[#FE2C55] text-white rounded-md font-medium hover:bg-[#E02446] transition-colors duration-200"
            onClick={onFollow}
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
