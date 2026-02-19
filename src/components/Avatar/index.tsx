interface AvatarProps {
  nickname: string;
  realname: string;
  imageSrc?: string;
}

function Avatar(props: AvatarProps) {
  const { nickname, realname, imageSrc = "/src/assets/photo.png" } = props;

  return (
    <div className="flex flex-row items-center w-full">
      <div className="mr-20">
        <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] rounded-full">
          <img
            className="rounded-full w-32 h-32 object-cover transition-transform duration-300 hover:scale-110"
            src={imageSrc}
            alt={`${nickname} avatar`}
          />
        </div>
      </div>

      <div className="flex flex-col text-center">
        <div>
          <h1 className="text-2xl font-bold">{nickname}</h1>
        </div>

        <div className="mt-3">
          <h2 className="text-lg text-gray-600">{realname}</h2>
        </div>

        <div className="mt-5">
          <button className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;