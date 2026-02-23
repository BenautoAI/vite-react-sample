/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import AvatarImage from './index';

function AvatarImageRender() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 gap-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">AvatarImage Component Demo</h1>
      
      <div className="flex flex-wrap items-end justify-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            src="https://i.pravatar.cc/300?img=1"
            alt="John Doe"
            size="sm"
          />
          <span className="text-sm text-gray-600">Small (sm)</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            src="https://i.pravatar.cc/300?img=2"
            alt="Jane Smith"
            size="md"
          />
          <span className="text-sm text-gray-600">Medium (md)</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            src="https://i.pravatar.cc/300?img=3"
            alt="Alex Johnson"
            size="lg"
          />
          <span className="text-sm text-gray-600">Large (lg) - default</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            src="https://i.pravatar.cc/300?img=4"
            alt="Sarah Williams"
            size="xl"
          />
          <span className="text-sm text-gray-600">Extra Large (xl)</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            alt="Michael Brown"
            size="lg"
          />
          <span className="text-sm text-gray-600">No image (fallback)</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            src="https://invalid-url.example/broken-image.jpg"
            alt="Emily Davis"
            size="lg"
          />
          <span className="text-sm text-gray-600">Broken image (fallback)</span>
        </div>
      </div>
    </div>
  );
}

export default AvatarImageRender;
