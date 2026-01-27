interface CircularAvatarProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

function CircularAvatar(props: CircularAvatarProps) {
  const { src, alt = 'Avatar', size = 'lg' } = props;

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  return (
    <div className="circular-avatar__container flex items-center justify-center">
      <div className={`circular-avatar__wrapper ${sizeClasses[size]}`}>
        <img
          className="
            rounded-full
            w-full
            h-full
            object-cover
            hover:scale-110
            transition-transform
            duration-300
            bg-gradient-to-r 
            p-[6px] 
            from-[#6EE7B7] 
            via-[#3B82F6] 
            to-[#9333EA]
          "
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
}

export default CircularAvatar;
