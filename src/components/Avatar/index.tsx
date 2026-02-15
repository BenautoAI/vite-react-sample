import photoImg from '../../assets/photo.png';

interface AvatarProps {
  nickname: string;
  realname: string;
  src?: string;
}

function Avatar(props: AvatarProps) {
  const { nickname, realname, src = photoImg } = props;

  return (
    <div className="avatar__container flex flex-row items-center w-full">
      <div className="avatar__photo mr-20">
        <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] rounded-full p-[6px] transition-transform hover:scale-110">
          <img
            className="rounded-full w-[200px] h-[200px] object-cover"
            src={src}
            alt={`Avatar for ${nickname}`}
          />
        </div>
      </div>

      <div className="avatar__texts text-center justify-between">
        <div className="text__title">
          <h1>{nickname}</h1>
        </div>

        <div className="text__name mt-3">
          <h2>{realname}</h2>
        </div>

        <div className="text__follow">
          <button className="w-80 mt-5">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;