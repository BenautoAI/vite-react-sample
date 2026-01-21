interface CircularAvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

function CircularAvatar(props: CircularAvatarProps) {
  const { src, alt = "Avatar", size = 400 } = props;

  return (
    <div className="circular-avatar__container flex items-center justify-center">
      <div 
        className="
          rounded-full 
          bg-gradient-to-br 
          from-[#6EE7B7] 
          via-[#3B82F6] 
          to-[#9333EA]
          p-[8px]
          hover:scale-105
          transition-transform
          duration-300
        "
        style={{ width: size, height: size }}
      >
        <img
          className="
            rounded-full 
            w-full 
            h-full 
            object-cover
          "
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
}

export default CircularAvatar;
