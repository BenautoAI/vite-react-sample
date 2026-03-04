interface ProfileCardProps {
  nickname: string;
  realname: string;
  imageUrl: string;
  onFollow?: () => void;
  isFollowing?: boolean;
}

function ProfileCard(props: ProfileCardProps) {
  const handleFollowClick = () => {
    if (props.onFollow) {
      props.onFollow();
    }
  };

  return (
    <div className='
      profilecard__container 
      flex 
      flex-col
      items-center
      justify-center
      p-4
      bg-white
      rounded-lg
      shadow-md
      w-full
      max-w-sm
      '>

      <div className='profilecard__avatar mb-4'>
        <img
          className='
          rounded-full
          hover:scale-110
          transition-transform
          duration-300
          ease-in-out
          bg-gradient-to-r 
          p-[6px] 
          from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
          w-24
          h-24
          object-cover
          '
          src={props.imageUrl}
          alt={props.nickname}
        />
      </div>

      <div className='profilecard__content text-center'>

        <div className='profilecard__nickname mb-2'>
          <h3 className='text-lg font-medium text-gray-900'>{props.nickname}</h3>
        </div>

        <div className='profilecard__realname mb-4'>
          <p className='text-sm text-gray-500'>{props.realname}</p>
        </div>

        <div className='profilecard__action'>
          <button 
            className='
            px-6
            py-2
            bg-gradient-to-r
            from-[#6EE7B7]
            via-[#3B82F6]
            to-[#9333EA]
            text-white
            font-medium
            rounded-lg
            hover:opacity-90
            transition-opacity
            duration-300
            '
            onClick={handleFollowClick}
          >
            {props.isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;
