import { useState } from 'react';

interface AvatarEditorProps {
  currentAvatar: string;
  nickname: string;
  realname: string;
  onAvatarChange: (newAvatarUrl: string) => void;
}

function AvatarEditor(props: AvatarEditorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEditIcon, setShowEditIcon] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Pre-loaded avatar gallery options (9 avatars)
  const avatarGallery = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar1',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar2',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar3',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar4',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar5',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar6',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar7',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar8',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar9',
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setUploadedImage(imageUrl);
        props.onAvatarChange(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySelect = (avatarUrl: string) => {
    props.onAvatarChange(avatarUrl);
    setIsModalOpen(false);
  };

  const displayAvatar = uploadedImage || props.currentAvatar;

  return (
    <div className='avatar-editor-container'>
      {/* Avatar with Edit Icon Overlay */}
      <div
        className='avatar-display-wrapper relative inline-block cursor-pointer'
        onMouseEnter={() => setShowEditIcon(true)}
        onMouseLeave={() => setShowEditIcon(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          className='
            rounded-full
            w-40
            h-40
            object-cover
            bg-gradient-to-r 
            p-[6px] 
            from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
            transition-transform
            hover:scale-110
          '
          src={displayAvatar}
          alt='User Avatar'
        />

        {/* Edit Icon Overlay */}
        {showEditIcon && (
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
            pointer-events-none
          '>
            <div className='text-white text-4xl'>✏️</div>
          </div>
        )}
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className='
          fixed
          inset-0
          bg-black
          bg-opacity-50
          flex
          items-center
          justify-center
          z-50
        '>
          <div className='
            bg-white
            rounded-lg
            shadow-2xl
            max-w-2xl
            w-full
            mx-4
            max-h-[90vh]
            flex
            flex-col
          '>
            {/* Modal Header */}
            <div className='
              flex
              justify-between
              items-center
              p-8
              border-b
              border-gray-200
            '>
              <h2 className='text-2xl font-bold text-gray-900'>
                Edit Avatar
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className='
                  text-gray-500
                  hover:text-gray-700
                  text-2xl
                  font-bold
                '
              >
                ×
              </button>
            </div>

            {/* Scrollable Content */}
            <div className='flex-1 overflow-y-auto p-8'>
              {/* Current Avatar Preview */}
              <div className='mb-6 text-center'>
                <p className='text-gray-600 text-sm mb-3'>Current Avatar</p>
                <img
                  className='
                    rounded-full
                    w-24
                    h-24
                    object-cover
                    mx-auto
                    border-2
                    border-gray-300
                  '
                  src={displayAvatar}
                  alt='Current Avatar'
                />
              </div>

              {/* Upload Section */}
              <div className='mb-8 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center'>
                <div className='text-4xl mb-3'>📤</div>
                <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                  Upload Your Photo
                </h3>
                <p className='text-gray-600 text-sm mb-4'>
                  Choose an image from your device
                </p>
                <label className='
                  inline-block
                  px-6
                  py-2
                  bg-blue-500
                  text-white
                  rounded-lg
                  cursor-pointer
                  hover:bg-blue-600
                  transition-colors
                '>
                  Choose File
                  <input
                    type='file'
                    accept='image/*'
                    onChange={handleFileUpload}
                    className='hidden'
                  />
                </label>
              </div>

              {/* Gallery Section */}
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Choose from Gallery
                </h3>
                <div className='
                  grid
                  grid-cols-3
                  gap-4
                '>
                  {avatarGallery.map((avatarUrl, index) => (
                    <button
                      key={index}
                      onClick={() => handleGallerySelect(avatarUrl)}
                      className='
                        relative
                        rounded-lg
                        overflow-hidden
                        border-2
                        border-gray-300
                        hover:border-blue-500
                        transition-colors
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        h-24
                      '
                    >
                      <img
                        className='
                          w-full
                          h-full
                          object-cover
                        '
                        src={avatarUrl}
                        alt={`Avatar option ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className='p-8 border-t border-gray-200 text-center'>
              <button
                onClick={() => setIsModalOpen(false)}
                className='
                  px-6
                  py-2
                  bg-gray-500
                  text-white
                  rounded-lg
                  hover:bg-gray-600
                  transition-colors
                '
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AvatarEditor;
