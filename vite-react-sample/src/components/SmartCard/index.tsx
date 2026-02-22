interface SmartCardProps {
  nickname: string;
  realname: string;
  avatarUrl: string;
  onFollowClick?: () => void;
}

function SmartCard(props: SmartCardProps) {
  const handleFollowClick = () => {
    if (props.onFollowClick) {
      props.onFollowClick();
    }
  };

  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      p-8
      flex 
      flex-col 
      items-center
      w-full
      max-w-sm
      transition-all
      duration-300
    ">
      
      {/* Avatar with gradient border */}
      <div className="avatar__photo mb-6">
        <img
          className="
            rounded-full
            bg-gradient-to-r 
            p-[6px] 
            from-cyan-400 
            via-blue-500 
            to-purple-600
            hover:scale-110
            transition-transform
            duration-300
            ease-in-out
            w-32
            h-32
            object-cover
          "
          src={props.avatarUrl}
          alt={`${props.nickname}'s avatar`}
        />
      </div>

      {/* User information */}
      <div className="avatar__texts text-center flex flex-col items-center w-full">
        
        <div className="text__title mb-2">
          <h1 className="text-2xl font-bold text-gray-900">
            {props.nickname}
          </h1>
        </div>

        <div className="text__name mb-6">
          <h2 className="text-base font-normal text-gray-600">
            {props.realname}
          </h2>
        </div>

        {/* Follow button */}
        <div className="text__follow w-full">
          <button 
            onClick={handleFollowClick}
            className="
              w-full
              px-6
              py-3
              bg-blue-600
              text-white
              font-medium
              rounded-lg
              hover:bg-blue-700
              active:bg-blue-800
              transition-colors
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:ring-offset-2
            "
          >
            Follow
          </button>
        </div>

      </div>

    </div>
  );
}

export default SmartCard;
