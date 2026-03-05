interface AvatarCardProps {
  nickname: string;
  realname: string;
  imageUrl?: string;
  id?: string;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
}

function AvatarCard(props: AvatarCardProps) {
  return (
    <div 
      draggable={props.draggable !== false}
      onDragStart={props.onDragStart}
      className="
      flex 
      flex-col 
      items-center 
      justify-center 
      bg-white 
      rounded-lg 
      shadow-md 
      p-6 
      h-auto 
      w-full
      cursor-grab
      active:cursor-grabbing
      transition-opacity
      hover:shadow-lg
    ">
      <div className="
        avatar-card__photo 
        mb-4
        rounded-full 
        bg-gradient-to-r 
        from-[#6EE7B7] 
        via-[#3B82F6] 
        to-[#9333EA] 
        p-1 
        hover:scale-110 
        transition-transform 
        duration-300
      ">
        <img
          className="
            rounded-full 
            w-32 
            h-32 
            object-cover
          "
          src={props.imageUrl || './src/assets/photo.png'}
          alt={props.realname}
        />
      </div>

      <div className="
        avatar-card__content 
        text-center 
        w-full
      ">
        <h3 className="
          text-lg 
          font-medium 
          text-gray-900
        ">
          {props.nickname}
        </h3>

        <p className="
          text-sm 
          text-gray-500 
          mt-1
        ">
          {props.realname}
        </p>

        <button className="
          mt-4 
          px-6 
          py-2 
          bg-blue-500 
          text-white 
          rounded-lg 
          hover:bg-blue-600 
          transition-colors 
          duration-200 
          font-medium
        ">
          Follow
        </button>
      </div>
    </div>
  );
}

export default AvatarCard;
