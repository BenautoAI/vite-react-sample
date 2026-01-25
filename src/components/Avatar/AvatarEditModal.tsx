import { useRef } from 'react';

interface AvatarEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAvatarChange: (avatarSrc: string) => void;
  currentAvatar: string;
}

const GALLERY_AVATARS = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
  'https://i.pravatar.cc/150?img=6',
  'https://i.pravatar.cc/150?img=7',
  'https://i.pravatar.cc/150?img=8',
  'https://i.pravatar.cc/150?img=9',
];

function AvatarEditModal(props: AvatarEditModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!props.isOpen) return null;

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          props.onAvatarChange(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySelect = (avatarSrc: string) => {
    props.onAvatarChange(avatarSrc);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  return (
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
      onClick={handleBackdropClick}
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
          relative
        '
      >
        {/* Close Button */}
        <button
          onClick={props.onClose}
          className='
            absolute
            top-4
            right-4
            text-gray-500
            hover:text-gray-700
            transition-colors
          '
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        {/* Modal Header */}
        <h2 className='text-2xl font-bold mb-6 text-gray-800'>
          Edit Avatar
        </h2>

        {/* Current Avatar Preview */}
        <div className='flex justify-center mb-6'>
          <img
            src={props.currentAvatar}
            alt='Current avatar'
            className='w-32 h-32 rounded-full object-cover border-4 border-gray-200'
          />
        </div>

        {/* Upload Section */}
        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-3 text-gray-700'>
            Upload Your Own
          </h3>
          <button
            onClick={handleUploadClick}
            className='
              w-full
              py-3
              px-4
              bg-gradient-to-r
              from-[#6EE7B7]
              via-[#3B82F6]
              to-[#9333EA]
              text-white
              rounded-lg
              font-medium
              hover:opacity-90
              transition-opacity
              flex
              items-center
              justify-center
              gap-2
            '
          >
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
              />
            </svg>
            Upload Image
          </button>
          <input
            ref={fileInputRef}
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            className='hidden'
          />
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className='text-lg font-semibold mb-3 text-gray-700'>
            Choose from Gallery
          </h3>
          <div className='grid grid-cols-3 gap-4'>
            {GALLERY_AVATARS.map((avatarSrc, index) => (
              <button
                key={index}
                onClick={() => handleGallerySelect(avatarSrc)}
                className='
                  relative
                  rounded-lg
                  overflow-hidden
                  hover:scale-105
                  transition-transform
                  duration-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                '
              >
                <img
                  src={avatarSrc}
                  alt={`Avatar option ${index + 1}`}
                  className='w-full h-full object-cover aspect-square'
                />
                <div
                  className='
                    absolute
                    inset-0
                    bg-black
                    bg-opacity-0
                    hover:bg-opacity-20
                    transition-all
                    duration-200
                  '
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarEditModal;
