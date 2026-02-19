/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import FastAvatar2 from "./FastAvatar2";

function FastAvatar2Render() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl font-bold text-gray-800">FastAvatar2 Component</h1>
        
        <div className="flex items-end gap-8">
          {/* Small size avatar */}
          <div className="flex flex-col items-center gap-3">
            <FastAvatar2 
              imageUrl="https://i.pravatar.cc/150?img=12"
              alt="User avatar small"
              size="sm"
            />
            <span className="text-sm text-gray-600">Small (64px)</span>
          </div>
          
          {/* Medium size avatar (default) */}
          <div className="flex flex-col items-center gap-3">
            <FastAvatar2 
              imageUrl="https://i.pravatar.cc/150?img=33"
              alt="User avatar medium"
              size="md"
            />
            <span className="text-sm text-gray-600">Medium (96px)</span>
          </div>
          
          {/* Large size avatar */}
          <div className="flex flex-col items-center gap-3">
            <FastAvatar2 
              imageUrl="https://i.pravatar.cc/150?img=68"
              alt="User avatar large"
              size="lg"
            />
            <span className="text-sm text-gray-600">Large (128px)</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 max-w-md text-center">
          Hover over any avatar to see the smooth scale animation. 
          Each avatar features a vibrant gradient border with cyan, blue, and purple colors.
        </p>
      </div>
    </div>
  );
}

export default FastAvatar2Render;
