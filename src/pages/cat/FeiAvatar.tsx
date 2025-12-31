interface FeiAvatarProps {
  className?: string;
}

function FeiAvatar(props: FeiAvatarProps) {
  return (
    <div 
      className={`
        fei-avatar__container 
        relative 
        inline-block
        ${props.className || ''}
      `}
    >
      <div 
        className="
          w-24 
          h-24 
          rounded-full 
          bg-gradient-to-br 
          from-purple-400 
          to-pink-500
          flex 
          items-center 
          justify-center
          shadow-lg
          border-4
          border-white
          overflow-hidden
        "
      >
        {/* Simple avatar face */}
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-300 to-pink-400">
          {/* Eyes */}
          <div className="absolute top-7 left-6 w-3 h-3 bg-white rounded-full">
            <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
          </div>
          <div className="absolute top-7 right-6 w-3 h-3 bg-white rounded-full">
            <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
          </div>
          
          {/* Smile */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-8 h-4">
            <div className="w-full h-full border-b-2 border-white rounded-b-full"></div>
          </div>
          
          {/* Label */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs font-bold">
            FEI
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeiAvatar;
