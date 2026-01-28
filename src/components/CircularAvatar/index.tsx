interface CircularAvatarProps {
  src: string;
  alt?: string;
  size?: number;
}

function CircularAvatar(props: CircularAvatarProps) {
  const { src, alt = 'Avatar', size = 200 } = props;

  return (
    <div className='circular-avatar__container flex items-center justify-center'>
      <div 
        className='
          circular-avatar__wrapper
          rounded-full
          bg-gradient-to-r 
          from-[#6EE7B7] 
          via-[#3B82F6] 
          to-[#9333EA]
          p-[6px]
          hover:scale-110
          transition-transform
          duration-300
          ease-in-out
          border-4
          border-red-500
        '
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <img
          className='
            circular-avatar__image
            rounded-full
            w-full
            h-full
            object-cover
          '
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
}

export default CircularAvatar;
