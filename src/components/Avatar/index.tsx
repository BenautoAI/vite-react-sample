import photo from '../../assets/photo.png';

interface AvatarProps {
  nickname: string;
  realname: string;
}

function Avatar(props: AvatarProps) {
  return (
    <div className="flex flex-row items-center w-full">
      <div className="flex-shrink-0">
        <div className="relative w-24 h-24 p-1 bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full">
          <img
            className="w-full h-full rounded-full object-cover hover:scale-110 transition-transform duration-300"
            src={photo}
            alt={props.nickname}
          />
        </div>
      </div>

      <div className="ml-6 flex flex-col justify-center">
        <div className="text-title">
          <h1 className="text-2xl font-bold">{props.nickname}</h1>
        </div>

        <div className="text-name mt-1">
          <h2 className="text-lg text-gray-600">{props.realname}</h2>
        </div>

        <div className="text-follow mt-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
