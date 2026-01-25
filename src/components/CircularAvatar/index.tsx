interface CircularAvatarProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

function CircularAvatar(props: CircularAvatarProps) {
  const { src, alt = 'Avatar', size = 'xl' } = props;

  // Size mapping for the outer container (includes gradient border)
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  // Padding for gradient border (larger sizes = thicker borders)
  const borderPadding = {
    sm: 'p-[3px]',
    md: 'p-[4px]',
    lg: 'p-[5px]',
    xl: 'p-[6px]'
  };

  return (
    <div className='circular-avatar__container'>
      <div
        className={`
          circular-avatar__wrapper
          ${sizeClasses[size]}
          ${borderPadding[size]}
          rounded-full
          bg-gradient-to-br 
          from-[#6EE7B7] 
          via-[#3B82F6] 
          to-[#9333EA]
          transition-transform
          hover:scale-110
          cursor-pointer
        `}
      >
        <img
          className='
            circular-avatar__image
            w-full
            h-full
            rounded-full
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
