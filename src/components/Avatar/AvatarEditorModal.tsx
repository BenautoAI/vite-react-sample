import { useState, useRef } from 'react';

interface AvatarEditorModalProps {
  currentAvatar: string;
  onAvatarChange: (newAvatarSrc: string) => void;
  onClose: () => void;
}

// Pre-loaded avatar options (using placeholder SVG data URLs for demonstration)
const AVATAR_GALLERY = [
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%236366f1" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="100" text-anchor="middle" dy=".3em" fill="white"%3EA%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ec4899" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="100" text-anchor="middle" dy=".3em" fill="white"%3EB%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%2310b981" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="100" text-anchor="middle" dy=".3em" fill="white"%3EC%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f59e0b" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="100" text-anchor="middle" dy=".3em" fill="white"%3ED%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%2306b6d4" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="100" text-anchor="middle" dy=".3em" fill="white"%3EE%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%238b5cf6" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="100" text-anchor="middle" dy=".3em" fill="white"%3EF%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ef4444" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="100" text-anchor="middle" dy=".3em" fill="white"%3EG%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%2314b8a6" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="100" text-anchor="middle" dy=".3em" fill="white"%3EH%3C/text%3E%3C/svg%3E',
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23a855f7" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="100" text-anchor="middle" dy=".3em" fill="white"%3EI%3C/text%3E%3C/svg%3E',
];

function AvatarEditorModal({ currentAvatar, onAvatarChange, onClose }: AvatarEditorModalProps) {
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedAvatar(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySelect = (avatarSrc: string) => {
    setSelectedAvatar(avatarSrc);
  };

  const handleSave = () => {
    onAvatarChange(selectedAvatar);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className='
      fixed 
      inset-0 
      z-50 
      flex 
      items-center 
      justify-center 
      bg-black 
      bg-opacity-50
      p-4
    '>
      <div className='
        bg-white 
        rounded-lg 
        shadow-2xl 
        max-w-2xl 
        w-full 
        max-h-[90vh]
        overflow-y-auto
        p-6
      '>
        {/* Header */}
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-gray-800'>Edit Avatar</h2>
          <button
            onClick={onClose}
            className='
              text-gray-500 
              hover:text-gray-700 
              text-3xl 
              leading-none
              transition-colors
            '
            aria-label='Close'
          >
            &times;
          </button>
        </div>

        {/* Preview */}
        <div className='flex flex-col items-center mb-8'>
          <div className='
            w-32 
            h-32 
            rounded-full 
            overflow-hidden 
            border-4 
            border-gray-200
            mb-4
          '>
            <img
              src={selectedAvatar}
              alt='Selected avatar preview'
              className='w-full h-full object-cover'
            />
          </div>
          <p className='text-sm text-gray-600'>Preview</p>
        </div>

        {/* Upload Section */}
        <div className='mb-8'>
          <h3 className='text-lg font-semibold text-gray-800 mb-4'>Upload Your Own</h3>
          <input
            type='file'
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept='image/*'
            className='hidden'
          />
          <button
            onClick={handleUploadClick}
            className='
              w-full 
              py-3 
              px-4 
              bg-blue-500 
              hover:bg-blue-600 
              text-white 
              rounded-lg 
              font-medium
              transition-colors
              flex
              items-center
              justify-center
              gap-2
            '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
              />
            </svg>
            Upload Image
          </button>
        </div>

        {/* Gallery Section */}
        <div className='mb-8'>
          <h3 className='text-lg font-semibold text-gray-800 mb-4'>Choose from Gallery</h3>
          <div className='grid grid-cols-3 gap-4'>
            {AVATAR_GALLERY.map((avatarSrc, index) => (
              <div
                key={index}
                onClick={() => handleGallerySelect(avatarSrc)}
                className={`
                  cursor-pointer 
                  rounded-lg 
                  overflow-hidden 
                  border-4 
                  transition-all
                  hover:scale-105
                  ${selectedAvatar === avatarSrc ? 'border-blue-500 shadow-lg' : 'border-gray-200'}
                `}
              >
                <img
                  src={avatarSrc}
                  alt={`Avatar option ${index + 1}`}
                  className='w-full h-full object-cover aspect-square'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-4'>
          <button
            onClick={handleSave}
            className='
              flex-1 
              py-3 
              px-4 
              bg-green-500 
              hover:bg-green-600 
              text-white 
              rounded-lg 
              font-medium
              transition-colors
            '
          >
            Save Changes
          </button>
          <button
            onClick={onClose}
            className='
              flex-1 
              py-3 
              px-4 
              bg-gray-300 
              hover:bg-gray-400 
              text-gray-800 
              rounded-lg 
              font-medium
              transition-colors
            '
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvatarEditorModal;
