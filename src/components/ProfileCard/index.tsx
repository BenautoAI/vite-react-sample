interface ProfileCardProps {
  id?: string;
  nickname: string;
  realname: string;
  imageUrl: string;
  onFollow?: () => void;
  isFollowing?: boolean;
  isDragging?: boolean;
  isDragOver?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
}

function ProfileCard(props: ProfileCardProps) {
  const handleFollowClick = () => {
    if (props.onFollow) {
      props.onFollow();
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (props.id && props.onDragStart) {
      props.onDragStart(e, props.id);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    if (props.id && props.onDragOver) {
      props.onDragOver(e, props.id);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (props.onDragLeave) {
      props.onDragLeave(e);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (props.id && props.onDrop) {
      props.onDrop(e, props.id);
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (props.onDragEnd) {
      props.onDragEnd(e);
    }
  };

  return (
    <div 
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      className={`
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
      transition-all
      duration-200
      cursor-move
      ${props.isDragging ? 'opacity-50' : 'opacity-100'}
      ${props.isDragOver ? 'border-2 border-blue-400 bg-blue-50' : 'border-2 border-transparent'}
      `}
    >

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
