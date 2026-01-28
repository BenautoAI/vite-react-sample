
import { avatarGallery } from './avatarGallery';

interface AvatarEditorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAvatar: (avatarUrl: string) => void;
}

function AvatarEditor({ isOpen, onClose, onSelectAvatar }: AvatarEditorProps) {
  if (!isOpen) return null;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        onSelectAvatar(result);
        onClose();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySelect = (avatarUrl: string) => {
    onSelectAvatar(avatarUrl);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Avatar</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="mb-6">
          <label
            htmlFor="file-upload"
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded cursor-pointer transition-colors"
          >
            Upload Your Image
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-medium mb-3">Or choose from gallery:</h3>
          <div className="grid grid-cols-3 gap-3">
            {avatarGallery.map((avatarUrl, index) => (
              <button
                key={index}
                onClick={() => handleGallerySelect(avatarUrl)}
                className="aspect-square rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors"
              >
                <img
                  src={avatarUrl}
                  alt={`Avatar option ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvatarEditor;
