import { useState } from 'react';
import AvatarEditorModal from './AvatarEditorModal';

interface AvatarProps {
  nickname: string;
  realname: string;
}

function Avatar(props: AvatarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState('./src/assets/photo.png');
  const [isHovering, setIsHovering] = useState(false);

  const handleAvatarClick = () => {
    setIsModalOpen(true);
  };

  const handleAvatarChange = (newAvatarSrc: string) => {
    setAvatarSrc(newAvatarSrc);
    setIsModalOpen(false);
  };

  return (
    <>
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
          onClick={handleAvatarClick}
        >
          <img
            className='
            rounded-full
            hover:scale-105
            transition-transform
            duration-300
            bg-gradient-to-r 
            p-[6px] 
            from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
            w-32 h-32
            object-cover
            border-4
            border-red-500
            '
            src={avatarSrc}
            alt={`${props.nickname}'s avatar`}
          />
          {isHovering && (
            <div className='
              absolute 
              inset-0 
              bg-black 
              bg-opacity-50 
              rounded-full 
              flex 
              items-center 
              justify-center
              transition-opacity
              duration-300
            '>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-10 w-10 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" 
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

      </div>

      {isModalOpen && (
        <AvatarEditorModal
          currentAvatar={avatarSrc}
          onAvatarChange={handleAvatarChange}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default Avatar;
