import { useState, useRef } from 'react';

interface AvatarEditorProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar: string;
  onAvatarChange: (newAvatar: string) => void;
}

const AVATAR_GALLERY = [
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

function AvatarEditor(props: AvatarEditorProps) {
  const { isOpen, onClose, currentAvatar, onAvatarChange } = props;
  const [selectedAvatar, setSelectedAvatar] = useState<string>(currentAvatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedAvatar(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySelect = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  const handleSave = () => {
    onAvatarChange(selectedAvatar);
    onClose();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="
      avatareditor__overlay
      fixed 
      inset-0 
      bg-black 
      bg-opacity-50 
      flex 
      items-center 
      justify-center 
      z-50"
    >
      <div className="
        avatareditor__modal
        bg-white 
        rounded-lg 
        p-6 
        w-full 
        max-w-md 
        mx-4"
      >
        <div className="avatareditor__header flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Edit Avatar</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="avatareditor__preview flex justify-center mb-6">
          <img
            src={selectedAvatar}
            alt="Selected avatar"
            className="
              rounded-full 
              w-32 
              h-32 
              object-cover 
              border-4 
              border-gray-200"
          />
        </div>

        <div className="avatareditor__upload mb-6">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={handleUploadClick}
            className="
              w-full 
              bg-blue-500 
              hover:bg-blue-600 
              text-white 
              py-3 
              rounded-lg 
              font-medium"
          >
            Upload Your Photo
          </button>
        </div>

        <div className="avatareditor__divider flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or choose from gallery</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="
          avatareditor__gallery 
          grid 
          grid-cols-3 
          gap-3 
          mb-6"
        >
          {AVATAR_GALLERY.map((avatar, index) => (
            <button
              key={index}
              onClick={() => handleGallerySelect(avatar)}
              className={`
                rounded-full 
                overflow-hidden 
                border-4 
                transition-all
                ${selectedAvatar === avatar ? 'border-blue-500 scale-105' : 'border-gray-200 hover:border-gray-400'}
              `}
            >
              <img
                src={avatar}
                alt={`Avatar option ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="avatareditor__actions flex gap-3">
          <button
            onClick={onClose}
            className="
              flex-1 
              bg-gray-200 
              hover:bg-gray-300 
              text-gray-800 
              py-3 
              rounded-lg 
              font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="
              flex-1 
              bg-blue-500 
              hover:bg-blue-600 
              text-white 
              py-3 
              rounded-lg 
              font-medium"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvatarEditor;
