import { useState } from 'react';

interface AvatarProps {
  nickname: string;
  realname: string;
}

function Avatar(props: AvatarProps) {
  const [avatarSrc, setAvatarSrc] = useState('./src/assets/photo.png');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleAvatarClick = () => {
    setIsEditorOpen(true);
  };

  const handleAvatarChange = (newSrc: string) => {
    setAvatarSrc(newSrc);
    setIsEditorOpen(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setAvatarSrc(result);
        setIsEditorOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Sample avatar gallery options
  const avatarOptions = [
    './src/assets/avatars/avatar1.svg',
    './src/assets/avatars/avatar2.svg',
    './src/assets/avatars/avatar3.svg',
    './src/assets/avatars/avatar4.svg',
    './src/assets/avatars/avatar5.svg',
    './src/assets/avatars/avatar6.svg',
    './src/assets/avatars/avatar7.svg',
    './src/assets/avatars/avatar8.svg',
    './src/assets/avatars/avatar9.svg',
  ];

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
        onClick={handleAvatarClick}
      >
        <img
          className='
            rounded-full
            hover:scale-105
            transition-transform
            duration-200
            bg-gradient-to-r 
            p-[6px] 
            from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
            w-32
            h-32
            object-cover
          '
          src={avatarSrc}
          alt="User avatar"
        />
        {isHovering && (
          <div className='
            absolute 
            inset-0 
            flex 
            items-center 
            justify-center 
            bg-black 
            bg-opacity-50 
            rounded-full
            transition-opacity
            duration-200
          '>
            <svg 
              className="w-8 h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
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

      {/* Avatar Editor Modal */}
      {isEditorOpen && (
        <div 
          className='
            fixed 
            inset-0 
            bg-black 
            bg-opacity-50 
            flex 
            items-center 
            justify-center 
            z-50
          '
          onClick={() => setIsEditorOpen(false)}
        >
          <div 
            className='
              bg-white 
              rounded-lg 
              p-8 
              max-w-2xl 
              w-full 
              mx-4
              shadow-2xl
            '
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>
              Change Avatar
            </h2>

            {/* Upload Option */}
            <div className='mb-6'>
              <label 
                className='
                  block 
                  w-full 
                  p-4 
                  border-2 
                  border-dashed 
                  border-gray-300 
                  rounded-lg 
                  text-center 
                  cursor-pointer 
                  hover:border-blue-500 
                  hover:bg-blue-50
                  transition-colors
                  duration-200
                '
              >
                <input 
                  type="file" 
                  accept="image/*" 
                  className='hidden' 
                  onChange={handleFileUpload}
                />
                <svg 
                  className="w-12 h-12 mx-auto mb-2 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                  />
                </svg>
                <span className='text-gray-600 font-medium'>
                  Upload your own image
                </span>
                <p className='text-sm text-gray-400 mt-1'>
                  Click to browse files
                </p>
              </label>
            </div>

            {/* Gallery Options */}
            <div className='mb-6'>
              <h3 className='text-lg font-semibold mb-4 text-gray-700'>
                Or choose from gallery:
              </h3>
              <div className='grid grid-cols-3 gap-4'>
                {avatarOptions.map((option, index) => (
                  <img
                    key={index}
                    src={option}
                    alt={`Avatar option ${index + 1}`}
                    className='
                      w-full 
                      h-24 
                      object-cover 
                      rounded-lg 
                      cursor-pointer 
                      border-2 
                      border-gray-200 
                      hover:border-blue-500 
                      hover:scale-105
                      transition-all
                      duration-200
                    '
                    onClick={() => handleAvatarChange(option)}
                  />
                ))}
              </div>
            </div>

            {/* Close Button */}
            <button
              className='
                w-full 
                mt-4 
                py-3 
                px-6 
                bg-gray-200 
                text-gray-700 
                rounded-lg 
                hover:bg-gray-300
                transition-colors
                duration-200
                font-medium
              '
              onClick={() => setIsEditorOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
