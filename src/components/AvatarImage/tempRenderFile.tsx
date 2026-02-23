/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import AvatarImage from './index';

function AvatarImageRender() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        AvatarImage Component Demo
      </h1>
      
      <div className="flex flex-wrap items-end justify-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            src="https://i.pravatar.cc/300?img=1"
            alt="John Doe"
            size="sm"
          />
          <p className="text-sm text-gray-600">Small (sm)</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            src="https://i.pravatar.cc/300?img=2"
            alt="Jane Smith"
            size="md"
          />
          <p className="text-sm text-gray-600">Medium (md)</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            src="https://i.pravatar.cc/300?img=3"
            alt="Alex Johnson"
            size="lg"
          />
          <p className="text-sm text-gray-600">Large (lg) - Default</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            src="https://i.pravatar.cc/300?img=4"
            alt="Sarah Williams"
            size="xl"
          />
          <p className="text-sm text-gray-600">Extra Large (xl)</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mt-16 mb-8 text-gray-800">
        Fallback States
      </h2>
      
      <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            alt="Michael Brown"
            size="lg"
          />
          <p className="text-sm text-gray-600">No Image Source</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <AvatarImage
            src="https://invalid-url.example/broken-image.jpg"
            alt="Emily Davis"
            size="lg"
          />
          <p className="text-sm text-gray-600">Failed to Load</p>
        </div>
      </div>
    </div>
  );
}

export default AvatarImageRender;
