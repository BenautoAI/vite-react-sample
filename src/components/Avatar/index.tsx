interface AvatarProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
}

function Avatar(props: AvatarProps) {
  const defaultImageUrl = "./src/assets/photo.png";
  const imageUrl = props.imageUrl || defaultImageUrl;

  return (
    <div className="avatar__container flex flex-row items-center w-full gap-6">
      <div className="avatar__photo">
        {/* Gradient border using nested div technique */}
        <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] rounded-full">
          <img
            className="rounded-full w-24 h-24 object-cover hover:scale-110 transition-transform duration-300"
            src={imageUrl}
            alt={`${props.nickname} profile picture`}
          />
        </div>
      </div>

      <div className="avatar__texts flex flex-col gap-2">
        <div className="text__title">
          <h1 className="text-xl font-bold">{props.nickname}</h1>
        </div>

        <div className="text__name">
          <h2 className="text-base text-gray-600">{props.realname}</h2>
        </div>

        <div className="text__follow mt-2">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
