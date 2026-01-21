import { useState } from 'react';

interface AvatarProps {
  nickname: string;
  realname: string;
}

// Gallery of pre-loaded avatar options
const avatarGallery = [
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

function Avatar(props: AvatarProps) {
  const [avatarSrc, setAvatarSrc] = useState<string>('./src/assets/photo.png');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setAvatarSrc(result);
        setIsModalOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySelect = (src: string) => {
    setAvatarSrc(src);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="avatar__container flex flex-row items-center w-full">
        <div 
          className="avatar__photo mr-20 relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsModalOpen(true)}
        >
          <img
            className="rounded-full hover:scale-x-110 hover:scale-y-110 transition-transform duration-300 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] outline outline-4 outline-red-500"
            src={avatarSrc}
            alt="User avatar"
          />
          
          {/* Edit icon overlay */}
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full transition-opacity duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
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

        <div className="avatar__texts text-center justify-between">
          <div className="text__title">
            <h1>{props.nickname}</h1>
          </div>

          <div className="text__name mt-3">
            <h2>{props.realname}</h2>
          </div>

          <div className="text__follow">
            <button className="w-80 mt-5">Follow</button>
          </div>
        </div>
      </div>

      {/* Avatar Editor Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Edit Avatar</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
              >
                &times;
              </button>
            </div>

            {/* Upload Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Upload Your Own</h3>
              <label
                htmlFor="avatar-upload"
                className="block w-full p-6 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-gray-600">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            {/* Gallery Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Choose from Gallery</h3>
              <div className="grid grid-cols-3 gap-4">
                {avatarGallery.map((src, index) => (
                  <div
                    key={index}
                    onClick={() => handleGallerySelect(src)}
                    className="cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <img
                      src={src}
                      alt={`Avatar option ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Avatar;
