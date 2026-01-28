import { useState } from 'react';
import AvatarEditor from './AvatarEditor';

interface AvatarProps {
  nickname: string,
  realname: string
}

function Avatar(props: AvatarProps) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("./src/assets/photo.png");
  const [isHovering, setIsHovering] = useState(false);

  const handleAvatarSelect = (newAvatarUrl: string) => {
    setAvatarUrl(newAvatarUrl);
  };

  return (
    <div className='
      avatar__container 
      flex 
      flex-row
      items-center
      w-full
      '>

      <div 
        className='avatar__photo mr-20 relative cursor-pointer'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsEditorOpen(true)}
      >
        <img
          className='
          rounded-full
          hover:scale-x-110
          hover:scale-y-110
          animation-delay: 999s;
          hover:animate-
          bg-gradient-to-r 
          p-[6px] 
          from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          '
          src={avatarUrl}
        />
        {isHovering && (
          <div className='absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center'>
            <svg 
              className='w-8 h-8 text-white' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                strokeWidth={2} 
                d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' 
              />
            </svg>
          </div>
        )}
      </div>

      <div className='avatar__texts text-center justify-between'>

        <div className='text__title'>
          <h1>{props.nickname}</h1>
        </div>

        <div className='text__name mt-3'>
          <h2>{props.realname}</h2>
        </div>

        <div className='text__follow'>
          <button className='w-80 mt-5'>
            Follow
          </button>
        </div>

      </div>

      <AvatarEditor 
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onSelectAvatar={handleAvatarSelect}
      />

    </div>
  );
}

export default Avatar;