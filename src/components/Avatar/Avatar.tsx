interface AvatarImageProps {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

function Avatar(props: AvatarImageProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const size = props.size || 'lg';

  return (
    <div className="avatar__wrapper inline-block">
      <div
        className={`
          avatar__image-container
          ${sizeClasses[size]}
          rounded-full
          bg-gradient-to-br
          from-[#6EE7B7]
          via-[#3B82F6]
          to-[#9333EA]
          p-[4px]
          transition-transform
          duration-300
          hover:scale-105
        `}
      >
        <img
          className="w-full h-full rounded-full object-cover"
          src={props.src}
          alt={props.alt || 'Avatar'}
        />
      </div>
    </div>
  );
}

export default Avatar;
