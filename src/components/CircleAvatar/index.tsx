interface CircleAvatarProps {
  imageUrl?: string,
  size?: 'small' | 'medium' | 'large',
  alt?: string
}

function CircleAvatar(props: CircleAvatarProps) {
  const { imageUrl = './src/assets/photo.png', size = 'large', alt = 'Avatar' } = props;

  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-48 h-48',
    large: 'w-96 h-96'
  };

  return (
    <div className='circle-avatar__container flex items-center justify-center p-8'>
      <div className={`circle-avatar__wrapper ${sizeClasses[size]}`}>
        <div
          className='
            relative 
            w-full 
            h-full 
            rounded-full 
            p-[8px] 
            bg-gradient-to-br 
            from-[#6EE7B7] 
            via-[#3B82F6] 
            to-[#9333EA] 
            shadow-2xl 
            hover:scale-105 
            transition-transform 
            duration-300 
            ease-in-out
          '
        >
          <img
            className='
              w-full 
              h-full 
              rounded-full 
              object-cover 
              border-4 
              border-white
            '
            src={imageUrl}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
}

export default CircleAvatar;
